import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(patients => this.patients = patients);
  }

  findAllFiltered($event: any) {
    this.patientService.getPatients($event.target.value)
      .subscribe(patients => this.patients = patients);
  }

  delete(id?: number){
    this.patientService.delete(id!).subscribe(() => {
      this.data = this.patientService.getPatients();
    });
  }

  goToEditPage(id: number | undefined): void {
    this.router.navigate(['/editPatient'], {state: { patientId: id }});
  }
}
