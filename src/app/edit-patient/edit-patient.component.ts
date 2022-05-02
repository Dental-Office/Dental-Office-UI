import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../Patient';
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
    this.patientFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      dateOfBirth: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(11), Validators.maxLength(15)]),
    },
    { updateOn: "blur" });
   }

  ngOnInit(): void {
    this.getPatient(this.id);
  }

  getPatient(id: number){
    this.patientService.getPatient(id).subscribe((patient) => {
      this.patientFormGroup.get("firstName")?.setValue(patient.firstName);
      this.patientFormGroup.get("lastName")?.setValue(patient.lastName);
      const dateElements = patient.dateOfBirth.split("-");
      const dateOfBirthObject = {
        year: Number(dateElements[0]),
        month: Number(dateElements[1]),
        day: Number(dateElements[2])
      }
      this.patientFormGroup.get("dateOfBirth")?.setValue(dateOfBirthObject);
      this.patientFormGroup.get("phoneNumber")?.setValue(patient.phoneNumber);
    });
  }

  editPatient() { 
    this.loading = true;
    if (this.patientFormGroup.valid) {
      const patient: Patient = {
        ...this.patientFormGroup.value,
        dateOfBirth: this.patientFormGroup.value.dateOfBirth.year + "-" + 
          this.patientFormGroup.value.dateOfBirth.month + "-" + 
          this.patientFormGroup.value.dateOfBirth.day
      }
      this.patientService.editPatient(this.id, patient).subscribe({
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

  goBackToThePatientList() {
    this.router.navigate(['/listOfPatients']);
  }
      
  onCalendarClosed() {
    this.calendarClosed = true;
  }
}
