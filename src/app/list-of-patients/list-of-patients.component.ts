import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.data = this.patientService.getPatients();
  }

  delete(id?: number){
    this.patientService.delete(id).subscribe(() => {
      this.data = this.patientService.getPatients();
    });
  }

  goToEditPage(id: number | undefined): void {
    this.router.navigate(['/editPatient'], {state: { patientId: id }});
  }

}
