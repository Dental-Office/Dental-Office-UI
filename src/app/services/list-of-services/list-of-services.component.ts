import { Component, OnInit } from '@angular/core';
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

  constructor(private serviceService: ServiceService) { }

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

  onSort(sortKey: string) {
    this.serviceService.findAll(this.searchTerm, this.pageNumber-1, this.pageSize, sortKey)
      .subscribe(serviceResponse => this.services = serviceResponse.content);
  }
}
