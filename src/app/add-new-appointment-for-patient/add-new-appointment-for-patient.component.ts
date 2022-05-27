import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTimepickerConfig, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-add-new-appointment-for-patient',
  templateUrl: './add-new-appointment-for-patient.component.html',
  styleUrls: ['./add-new-appointment-for-patient.component.css']
})
export class AddNewAppointmentForPatientComponent implements OnInit {

  patientId: string;
  appointmentData: FormGroup;
  calendarClosed = false;
  isErrorToastShown = false;
  loading = false;
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(config: NgbTimepickerConfig, private appointmentService: AppointmentService, private router: Router) {
    config.seconds = false;
    config.spinners = false;
    this.patientId = this.router.getCurrentNavigation()?.extras.state?.['patientId'];
    if(!this.patientId) {
      this.router.navigate(['/addNewAppointment']);
    }
    this.appointmentData = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required])
    },
    { updateOn: "blur" });
   }

   ngOnInit(): void {}

   onSubmit() {
    this.loading = true;
    if (this.appointmentData.valid) {
      const appointmentToBeSaved: Appointment = {
        ...this.appointmentData.value,
        patientId: this.patientId,
        date: this.appointmentData.value.date.year + "-" + 
          this.appointmentData.value.date.month + "-" + 
          this.appointmentData.value.date.day,
        time: this.appointmentData.value.time.hour + ":" + 
          this.appointmentData.value.time.minute
      }
      this.appointmentService.createAppointment(appointmentToBeSaved).subscribe({
        next: () => {
          this.router.navigate(['/homePage']);
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
