import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  id: number;
  dentalServiceFormGroup: FormGroup;
  isErrorToastShown = false;
  loading = false;

  constructor(private serviceService: ServiceService, private router: Router) {
    this.id = this.router.getCurrentNavigation()?.extras.state?.['dentalServiceId'];
    if(!this.id) {
      this.router.navigate(['/listOfServices']);
    }
    this.dentalServiceFormGroup = new FormGroup({
      serviceName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]),
    },
    { updateOn: "blur" });
   }

  ngOnInit(): void {
    this.getService(this.id);
  }

  getService(id: number){
    this.serviceService.get(id).subscribe((service) => {
      this.dentalServiceFormGroup.get("serviceName")?.setValue(service.serviceName);
    });
  }

  editService() { 
    this.loading = true;
    if (this.dentalServiceFormGroup.valid) {
      const service: Service = {
        ...this.dentalServiceFormGroup.value,
      }
      this.serviceService.edit(this.id, service).subscribe({
        next: () => {
          this.router.navigate(['/listOfServices']);
        },
        error: () => {
          this.isErrorToastShown = true;
          this.loading = false;
        }
      }
    )}
  }
}
