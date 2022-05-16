import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-patients',
  templateUrl: './list-of-patients.component.html',
  styleUrls: ['./list-of-patients.component.css']
})
export class ListOfPatientsComponent implements OnInit {

  data: Observable<Patient[]> | undefined;
  patients: Patient[] = [];
  searchTerm: string = "";
  page!: number;
  pageSize = 10;
  totalPages: number = 0;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.patientService.getPatients($event.target.value)
      .subscribe(patientsResponse => this.patients = patientsResponse.content);
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.patientService.getPatients(this.searchTerm, this.page-1, this.pageSize)
        .subscribe(patientsResponse => this.patients = patientsResponse.content);
    }
  }

  delete(id?: number){
    this.patientService.delete(id!).subscribe(() => {
      this.data = this.patientService.getPatients().pipe(map(patientsResponse => patientsResponse.content));
    });
  }

  goToEditPage(id: number | undefined): void {
    this.router.navigate(['/editPatient'], {state: { patientId: id }});
  }
}
