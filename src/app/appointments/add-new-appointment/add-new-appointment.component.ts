import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/patients/patient.service';
import { Patient } from '../../patients/patient';

@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.component.html',
  styleUrls: ['./add-new-appointment.component.css']
})
export class AddNewAppointmentComponent implements OnInit {

  patients: Patient[] = [];
  searchTerm: string = "";
  pageNumber!: number;
  pageSize = 10;
  totalPages: number = 0;

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit(): void {
    this.patientService.findAll()
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.patientService.findAll($event.target.value)
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      }); 
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.patientService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize)
        .subscribe(patientsResponse => this.patients = patientsResponse.content);
    }
  }

  onSort(sortKey: string) {
    this.patientService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(patientsResponse => this.patients = patientsResponse.content);
  }

  goToAddNewAppointmentForPatient(id: string | undefined): void {
    this.router.navigate(['/addNewAppointmentForPatient'], {state: { patientId: id }});
  }
}
