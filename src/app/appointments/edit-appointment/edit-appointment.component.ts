import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentEditRequest, AppointmentRequest } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  id: number;
  patientId: string;
  appointmentFormGroup: FormGroup;
  calendarClosed = false;
  isErrorToastShown = false;
  loading = false;

  constructor(private appointmentService: AppointmentService, private router: Router) {
    this.id = this.router.getCurrentNavigation()?.extras.state?.['appointmentId'];
    this.patientId = this.router.getCurrentNavigation()?.extras.state?.['patientId'];

    if(!this.id) {
      this.router.navigate(['/listOfAppointments']);
    }
    this.appointmentFormGroup = new FormGroup({
      patientId: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    },
    { updateOn: "blur" });
   }

  ngOnInit(): void {
    this.getAppointment(this.id);
  }

  getAppointment(id: number){
    this.appointmentService.get(id).subscribe((appointment) => {
      this.appointmentFormGroup.get("patientId")?.setValue(appointment.patient.id);
      const dateElements = appointment.date.split("-");
      const appointmentDateObject = {
        year: Number(dateElements[0]),
        month: Number(dateElements[1]),
        day: Number(dateElements[2])
      };
      const timeElements = appointment.time.split(":");
      const appointmentTimeObject = {
        hour: Number(timeElements[0]),
        minute: Number(timeElements[1])
      }
      this.appointmentFormGroup.get("date")?.setValue(appointmentDateObject);
      this.appointmentFormGroup.get("time")?.setValue(appointmentTimeObject);
    });
  }

  editAppointment() { 
    this.loading = true;
    if (this.appointmentFormGroup.valid) {
      const appointment: AppointmentRequest = {
        ...this.appointmentFormGroup.value,
        date: this.appointmentFormGroup.value.date.year + "-" + 
          this.appointmentFormGroup.value.date.month + "-" + 
          this.appointmentFormGroup.value.date.day,
        time: this. appointmentFormGroup.value.time.hour + ":" +
          this.appointmentFormGroup.value.time.minute
      }
      this.appointmentService.edit(this.id, appointment).subscribe({
        next: () => {
          this.router.navigate(['/listOfAppointments']);
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
