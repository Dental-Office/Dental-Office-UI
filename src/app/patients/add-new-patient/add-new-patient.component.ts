import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/patients/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {
  
  basicData: FormGroup;
  calendarClosed = false;
  isErrorToastShown = false;
  loading = false;

  constructor(private patientService: PatientService, private router: Router) {
    this.basicData = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      birthDate: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(11), Validators.maxLength(15)]),
    },
      { updateOn: "blur" });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.loading = true;
    if (this.basicData.valid) {
      const patientToBeSaved: Patient = {
        ...this.basicData.value,
        birthDate: this.basicData.value.birthDate.year + "-" + 
          this.basicData.value.birthDate.month + "-" + 
          this.basicData.value.birthDate.day
      }
      this.patientService.create(patientToBeSaved).subscribe({
        next: () => {
          this.router.navigate(['/listOfPatients']);
        },
        error: () => {
            this.isErrorToastShown = true;
            this.loading = false;
        }
      });
    }
  }

  onCalendarClosed() {
    this.calendarClosed = true;
  }
}
