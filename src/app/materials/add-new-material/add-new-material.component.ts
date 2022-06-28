import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Material } from '../material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-add-new-material',
  templateUrl: './add-new-material.component.html',
  styleUrls: ['./add-new-material.component.css']
})
export class AddNewMaterialComponent implements OnInit {

  materials: FormGroup;
  isErrorToastShown = false;
  loading = false;

  constructor(private materialService: MaterialService, private router: Router) {
    this.materials = new FormGroup({
      materialName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      // quantity: new FormControl('', [Validators.required])
      quantity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'),  Validators.minLength(1), Validators.maxLength(5)])
    },
      { updateOn: "blur" });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    if (this.materials.valid) {
      const materialToBeSaved: Material = {
        ...this.materials.value,
      }
      this.materialService.create(materialToBeSaved).subscribe({
        next: () => {
          this.router.navigate(['/listOfMaterials']);
        },
        error: () => {
            this.isErrorToastShown = true;
            this.loading = false;
        }
      });
      
    }
  }

}
