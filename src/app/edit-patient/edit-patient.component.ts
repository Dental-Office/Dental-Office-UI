import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  editPatient() {
    if(this.patient) {
      this.patientService.editPatient(this.id, this.patient).subscribe((patient) => {
        this.patient = patient;
      });
    }
  }
}
