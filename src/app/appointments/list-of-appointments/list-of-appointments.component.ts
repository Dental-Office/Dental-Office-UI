import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-list-of-appointments',
  templateUrl: './list-of-appointments.component.html',
  styleUrls: ['./list-of-appointments.component.css']
})
export class ListOfAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];
  searchTerm: string = "";
  pageNumber!: number;
  pageSize = 10;
  totalPages: number = 0;

  constructor(private appointmentService: AppointmentService) { }
  
  ngOnInit(): void {
    this.appointmentService.findAll()
      .subscribe(appointmentResponse => {
        this.appointments = appointmentResponse.content;
        this.totalPages = appointmentResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.appointmentService.findAll($event.target.value)
      .subscribe(appointmentResponse => {
        this.appointments = appointmentResponse.content;
        this.totalPages = appointmentResponse.totalPages;
      }); 
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.appointmentService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize)
        .subscribe(appointmentResponse => this.appointments = appointmentResponse.content);
    }
  }

  onDelete(id?: string){
    this.appointmentService.delete(id!).subscribe(() => {
      this.appointmentService.findAll()
        .subscribe((appointments) => {
          this.appointments = appointments.content
        });
    });
  }

  onSort(sortKey: string) {
    this.appointmentService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(patientsResponse => this.appointments = patientsResponse.content);
  }
}