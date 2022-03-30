import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {

  basicData: FormGroup;
  calendarClosed = false;

  constructor(private patientService: PatientService) {
    this.basicData = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      dateOfBirth: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(15)]),
    },
      { updateOn: "blur" });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.basicData.valid) {

      const patientToBeSaved: Patient = {
        ...this.basicData.value,
        dateOfBirth: this.basicData.value.dateOfBirth.year + "-" + this.basicData.value.dateOfBirth.month + "-" + this.basicData.value.dateOfBirth.day
      }
      this.patientService.postPatient(patientToBeSaved).subscribe({
        next: () => {
          alert('Patient successfully saved!')
        },
        error: () => {
          alert('Patiet is not saved!')
        }
      });
    }
  }

  onCalendarClosed() {
    this.calendarClosed = true;
  }
}
