import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient: Patient | undefined;
  id: number;

  constructor(private patientService: PatientService, private router: Router) {
    this.id = this.router.getCurrentNavigation()?.extras.state?.['patientId'];
   }

  ngOnInit(): void {
    this.getPatient(this.id);
  }

  getPatient(id: number){
    this.patientService.getPatient(id).subscribe((patient) => {
      this.patient = patient;
    });
  }

  

}
