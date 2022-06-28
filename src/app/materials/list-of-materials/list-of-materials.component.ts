import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from '../material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-list-of-materials',
  templateUrl: './list-of-materials.component.html',
  styleUrls: ['./list-of-materials.component.css']
})
export class ListOfMaterialsComponent implements OnInit {

  materials: Material[] = [];
  searchTerm: string = "";
  pageNumber!: number;
  pageSize = 10;
  totalPages: number = 0;
  isErrorToastShown = false;

  constructor(private materialService: MaterialService, private router: Router) { }

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

  onDelete(id?: string){
    this.materialService.delete(id!).subscribe({
      next: () => {
        this.materialService.findAll()
          .subscribe(materials => this.materials = materials.content)
      },
      error: (exception: HttpErrorResponse) => {
         if (exception.status === 409) {
          this.isErrorToastShown = true;
         }
      }
  });
  }

  goToEditPage(id: string | undefined): void {
    this.router.navigate(['/editMaterial'], {state: { materialId: id }});
  }

  onSort(sortKey: string) {
    this.materialService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(materialResponse => this.materials = materialResponse.content);
  }

}
