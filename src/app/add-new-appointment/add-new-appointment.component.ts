import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.component.html',
  styleUrls: ['./add-new-appointment.component.css']
})
export class AddNewAppointmentComponent implements OnInit {

  patients: Patient[] = [];
  searchTerm: string = "";
  page!: number;
  pageSize = 10;
  totalPages: number = 0;

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.patientService.getPatients($event.target.value)
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      }); 
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.patientService.getPatients(this.searchTerm, this.page-1, this.pageSize)
        .subscribe(patientsResponse => this.patients = patientsResponse.content);
    }
  }

  onSort(sortKey: string) {
    this.patientService.getPatients(this.searchTerm, this.page-1, this.pageSize, sortKey)
      .subscribe(patientsResponse => this.patients = patientsResponse.content);
  }

  goToAddNewAppointmentForPatient(id: string | undefined): void {
    this.router.navigate(['/addNewAppointmentForPatient'], {state: { patientId: id }});
  }

  


  

  

  // onCalendarClosed() {
  //   this.calendarClosed = true;
  // }
 
  // onSubmit() {
  //   if (this.appointmentData.valid) {
  //     const appointmentToBeSaved: Appointment = {
  //       ...this.appointmentData.value,
  //       date: this.appointmentData.value.date.year + "-" + 
  //         this.appointmentData.value.date.month + "-" + 
  //         this.appointmentData.value.date.day,
  //       time: this.appointmentData.value.time.hour + "-" + this.appointmentData.value.time.minute
  //     }
  //     this.appointmentService.createAppointment(appointmentToBeSaved).subscribe({
  //       next: () => {
  //         this.router.navigate(['/homePage']);
  //       }
  //     });
  //   }
  // }
}
