import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list-of-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.css']
})
export class ListOfServicesComponent implements OnInit {

  services: Service[] = [];
  searchTerm: string = "";
  pageNumber!: number;
  pageSize = 10;
  totalPages: number = 0;
  isErrorToastShown = false;

  constructor(private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.serviceService.findAll()
      .subscribe(serviceResponse => {
        this.services = serviceResponse.content;
        this.totalPages = serviceResponse.totalPages;
      });
  }

  findAllFiltered($event: any) {
    this.serviceService.findAll($event.target.value)
      .subscribe(serviceResponse => {
        this.services = serviceResponse.content;
        this.totalPages = serviceResponse.totalPages;
      }); 
  }

  findWidthPaging(selectedPage: any) {
    if(Number.isInteger(selectedPage)) {
      this.serviceService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize)
        .subscribe(serviceResponse => this.services = serviceResponse.content);
    }
  }

  onDelete(id?: string){
    this.serviceService.delete(id!).subscribe({
      next: () => {
        this.serviceService.findAll()
          .subscribe(services => this.services = services.content)
      },
      error: (exception: HttpErrorResponse) => {
         if (exception.status === 409) {
          this.isErrorToastShown = true;
         }
      }
  });
  }

  goToEditPage(id: string | undefined): void {
    this.router.navigate(['/editDentalServices'], {state: { dentalServiceId: id }});
  }

  onSort(sortKey: string) {
    this.serviceService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(serviceResponse => this.services = serviceResponse.content);
  }
}
