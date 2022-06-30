import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css']
})
export class AddNewServiceComponent implements OnInit {

  services: FormGroup;
  isErrorToastShown = false;
  loading = false;

  constructor(private serviceService: ServiceService, private router: Router) {
    this.services = new FormGroup({
      serviceName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
    },
      { updateOn: "blur" });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    if (this.services.valid) {
      const serviceToBeSaved: Service = {
        ...this.services.value,
      }
      this.serviceService.create(serviceToBeSaved).subscribe({
        next: () => {
          this.router.navigate(['/listOfServices']);
        },
        error: () => {
            this.isErrorToastShown = true;
            this.loading = false;
        }
      });
    }
  }
}
