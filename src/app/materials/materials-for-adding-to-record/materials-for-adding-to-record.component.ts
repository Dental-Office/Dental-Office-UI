import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordRequest } from 'src/app/patient_record/record';
import { RecordService } from 'src/app/patient_record/record.service';
import { Material } from '../material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-materials-for-adding-to-record',
  templateUrl: './materials-for-adding-to-record.component.html',
  styleUrls: ['./materials-for-adding-to-record.component.css']
})
export class MaterialsForAddingToRecordComponent implements OnInit {

  materials: Material[] = [];
  patientId: string;
  firstName: string;
  lastName: string;
  searchTerm: string = "";
  pageNumber!: number;
  pageSize = 10;
  totalPages: number = 0;
  isErrorToastShown = false;
  loading = false;
  materialIds: string[] = [];
  materialName: string;
  addedMaterials: string[] = [];

  constructor(private materialService: MaterialService, private recordService: RecordService, private router: Router) {
    this.patientId = this.router.getCurrentNavigation()?.extras.state?.['patientId'];
    this.firstName = this.router.getCurrentNavigation()?.extras.state?.['firstName'];
    this.lastName = this.router.getCurrentNavigation()?.extras.state?.['lastName'];
    this.materialName = this.router.getCurrentNavigation()?.extras.state?.['materialName'];
  }

  ngOnInit(): void {
    this.materialService.findAll()
      .subscribe(materialResponse => {
        this.materials = materialResponse.content;
        this.totalPages = materialResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.materialService.findAll($event.target.value)
      .subscribe(materialResponse => {
        this.materials = materialResponse.content;
        this.totalPages = materialResponse.totalPages;
      }); 
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.materialService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize)
        .subscribe(materialResponse => this.materials = materialResponse.content);
    }
  }

  onSort(sortKey: string) {
    this.materialService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(materialResponse => this.materials = materialResponse.content);
  }

  goToMaterials(id: string, materialName: string) {

    this.materialIds.push(id);

    this.router.navigate(['/materialsForAddingToRecord'], {state: {materialName: materialName}});

    this.addedMaterials.push(materialName);
  }

  removeMaterial(index: number){

    if(index !== -1) {
      this.addedMaterials.splice(index, 1);
    }
  }

  saveNewRecord() {

    const recordToBeSaved: RecordRequest = {
    
      materialIds: this.materialIds,
      patientId: this.patientId
    }
      
    this.recordService.create(recordToBeSaved).subscribe({
      next: () => {
        this.router.navigate(['/listOfRecords']);
      },
      error:() => {}
      
    });
  }
}
