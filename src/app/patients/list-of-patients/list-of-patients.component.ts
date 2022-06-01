import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-of-patients',
  templateUrl: './list-of-patients.component.html',
  styleUrls: ['./list-of-patients.component.css']
})
export class ListOfPatientsComponent implements OnInit {

  patients: Patient[] = [];
  searchTerm: string = "";
  pageNumber!: number;
  pageSize = 10;
  totalPages: number = 0;
  isErrorToastShown = false;

  constructor(private patientService: PatientService, private router: Router) { }

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

  onDelete(id?: string){
    this.patientService.delete(id!).subscribe({
      next: () => {
        this.patientService.findAll()
          .subscribe(patients => this.patients = patients.content)
      },
      error: (exception: HttpErrorResponse) => {
         if (exception.status === 409) {
          this.isErrorToastShown = true;
         }
      }
  });
  }

  goToEditPage(id: string | undefined): void {
    this.router.navigate(['/editPatient'], {state: { patientId: id }});
  }

  onSort(sortKey: string) {
    this.patientService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(patientsResponse => this.patients = patientsResponse.content);
  }
}