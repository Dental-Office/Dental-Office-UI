import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.component.html',
  styleUrls: ['./add-new-appointment.component.css']
})
export class AddNewAppointmentComponent implements OnInit {

  // calendarClosed = false;
  // appointmentData: FormGroup;
  patients: Patient[] = [];
  searchTerm: string = "";
  page!: number;
  pageSize = 10;
  totalPages: number = 0;

  // time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(private patientService: PatientService) {
  }
  
  // constructor(config: NgbTimepickerConfig, private patientService: PatientService, private appointmentService: AppointmentService, private router: Router) {
  //   config.seconds = false;
  //   config.spinners = false;
  //   this.appointmentData = new FormGroup ({
  //     patientId: new FormControl('', [Validators.required]),
  //     date: new FormControl('', [Validators.required]),
  //     time: new FormControl('', [Validators.required])
  //   }, 
  //    { updateOn: "blur" });
  // }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.patientService.getPatients($event.target.value)
      .subscribe(patientsResponse => this.patients = patientsResponse.content);
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.patientService.getPatients(this.searchTerm, this.page-1, this.pageSize)
        .subscribe(patientsResponse => this.patients = patientsResponse.content);
    }
  }

  // onCalendarClosed() {
  //   this.calendarClosed = true;
  // }
 
  // onSubmit() {
  //   if (this.appointmentData.valid) {
  //     const appointmentToBeSaved: Appointment = {
  //       ...this.appointmentData.value,
  //       date: this.appointmentData.value.date.year + "-" + 
  //         this.appointmentData.value.date.month + "-" + 
  //         this.appointmentData.value.date.day,
  //       time: this.appointmentData.value.time.hour + "-" + this.appointmentData.value.time.minute
  //     }
  //     this.appointmentService.createAppointment(appointmentToBeSaved).subscribe({
  //       next: () => {
  //         this.router.navigate(['/homePage']);
  //       }
  //     });
  //   }
  // }
}
