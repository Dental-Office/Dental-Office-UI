import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  id: number;
  patientFormGroup: FormGroup;
  calendarClosed = false;
  isErrorToastShown = false;
  loading = false;

  constructor(private patientService: PatientService, private router: Router) {
    this.id = this.router.getCurrentNavigation()?.extras.state?.['patientId'];
    if(!this.id) {
      this.router.navigate(['/listOfPatients']);
    }
    this.patientFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      birthDate: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(11), Validators.maxLength(15)]),
    },
    { updateOn: "blur" });
   }

  ngOnInit(): void {
    this.getPatient(this.id);
  }

  getPatient(id: number){
    this.patientService.get(id).subscribe((patient) => {
      this.patientFormGroup.get("firstName")?.setValue(patient.firstName);
      this.patientFormGroup.get("lastName")?.setValue(patient.lastName);
      const dateElements = patient.birthDate.split("-");
      const birthDateObject = {
        year: Number(dateElements[0]),
        month: Number(dateElements[1]),
        day: Number(dateElements[2])
      }
      this.patientFormGroup.get("birthDaate")?.setValue(birthDateObject);
      this.patientFormGroup.get("phoneNumber")?.setValue(patient.phoneNumber);
    });
  }

  editPatient() { 
    this.loading = true;
    if (this.patientFormGroup.valid) {
      const patient: Patient = {
        ...this.patientFormGroup.value,
        birthDate: this.patientFormGroup.value.birthDate.year + "-" + 
          this.patientFormGroup.value.birthDate.month + "-" + 
          this.patientFormGroup.value.birthDate.day
      }
      this.patientService.edit(this.id, patient).subscribe({
        next: () => {
          this.router.navigate(['/listOfPatients']);
        },
        error: () => {
          this.isErrorToastShown = true;
          this.loading = false;
        }
      }
    )}
  }
      
  onCalendarClosed() {
    this.calendarClosed = true;
  }
}
