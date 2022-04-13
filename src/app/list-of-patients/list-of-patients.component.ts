import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-list-of-patients',
  templateUrl: './list-of-patients.component.html',
  styleUrls: ['./list-of-patients.component.css']
})
export class ListOfPatientsComponent implements OnInit {

  data: Observable<Patient[]> | undefined;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.data = this.patientService.getPatients();
  }

  delete(id?: number){
    this.patientService.delete(id).subscribe(() => {
      this.data = this.patientService.getPatients();
    });

  }


}
