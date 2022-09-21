import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/patients/patient';
import { PatientService } from 'src/app/patients/patient.service';
import { RecordRequest } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-add-new-record',
  templateUrl: './add-new-record.component.html',
  styleUrls: ['./add-new-record.component.css']
})
export class AddNewRecordComponent implements OnInit {

  patients: Patient[] = [];
  searchTerm: string = "";
  pageNumber!: number;
  pageSize = 10;
  totalPages: number = 0;
  isErrorToastShown = false;
  loading = false;

  constructor(private patientService: PatientService, private recordService: RecordService, private router: Router) {

  }

  ngOnInit(): void {
    this.patientService.findAll()
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.patientService.findAll($event.target.value)
      .subscribe(patientsResponse => {
        this.patients = patientsResponse.content;
        this.totalPages = patientsResponse.totalPages;
      }); 
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.patientService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize)
        .subscribe(patientsResponse => this.patients = patientsResponse.content);
    }
  }

  onSort(sortKey: string) {
    this.patientService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(patientsResponse => this.patients = patientsResponse.content);
  }

  goToMaterials(id: string | undefined, firstName: string, lastName: string) {
    this.router.navigate(['/materialsForAddingToRecord'], {state: {patientId: id, firstName: firstName, lastName: lastName}})
  }

  // saveNewRecord(id: string | undefined) {

  //   const patientId = id as string;

  //   const recordToBeSaved: RecordRequest = {
  //     patientId}
      
  //   this.recordService.create(recordToBeSaved).subscribe({
  //     next: () => {
  //       this.router.navigate(['/listOfRecords'],{state: { patientId: id }});
  //     },
  //     error:() => {}
      
  //   });
    
  // }
}
