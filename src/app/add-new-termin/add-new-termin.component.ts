import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-new-termin',
  templateUrl: './add-new-termin.component.html',
  styleUrls: ['./add-new-termin.component.css']
})
export class AddNewTerminComponent implements OnInit {

  // calendarClosed = false;
  // terminData: FormGroup;
  patients: Patient[] = [];
  searchTerm: string = "";
  page!: number;
  // time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(private patientService: PatientService) {
  }
  
  // constructor(config: NgbTimepickerConfig, private patientService: PatientService, private terminService: TerminService, private router: Router) {
  //   config.seconds = false;
  //   config.spinners = false;
  //   this.terminData = new FormGroup ({
  //     idOfPatient: new FormControl('', [Validators.required]),
  //     firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
  //     lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
  //     phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(11), Validators.maxLength(15)]),
  //     dateOfTermin: new FormControl('', [Validators.required]),
  //     timeOfTermin: new FormControl('', [Validators.required])
  //   }, 
  //    { updateOn: "blur" });
  // }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(patients => this.patients = patients);
  }

  findAllFiltered($event: any) {
    this.patientService.getPatients($event.target.value)
      .subscribe(patients => this.patients = patients);
  }

  // onCalendarClosed() {
  //   this.calendarClosed = true;
  // }
 
  // onSubmit() {
  //   if (this.terminData.valid) {
  //     const terminToBeSaved: Termin = {
  //       ...this.terminData.value,
  //       dateOfTermin: this.terminData.value.dateOfTermin.year + "-" + 
  //         this.terminData.value.dateOfTermin.month + "-" + 
  //         this.terminData.value.dateOfTermin.day,
  //       timeOfTermin: this.terminData.value.timeOfTermin.hour + "-" + this.terminData.value.timeOfTermin.minute
  //     }
  //     this.terminService.createTermin(terminToBeSaved).subscribe({
  //       next: () => {
  //         this.router.navigate(['/homePage']);
  //       }
  //     });
  //   }
  // }
}
