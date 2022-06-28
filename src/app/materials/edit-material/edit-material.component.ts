import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Material } from '../material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent implements OnInit {

  id: number;
  materialFormGroup: FormGroup;
  isErrorToastShown = false;
  loading = false;

  constructor(private materialService: MaterialService, private router: Router) {
    this.id = this.router.getCurrentNavigation()?.extras.state?.['materialId'];
    if(!this.id) {
      this.router.navigate(['/listOfMaterials']);
    }
    this.materialFormGroup = new FormGroup({
      materialName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      quantity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(1), Validators.maxLength(5)]),
    },
    { updateOn: "blur" });
   }

  ngOnInit(): void {
    this.getMaterial(this.id);
  }

  getMaterial(id: number){
    this.materialService.get(id).subscribe((material) => {
      this.materialFormGroup.get("materialName")?.setValue(material.materialName);
      this.materialFormGroup.get("quantity")?.setValue(material.quantity);
    });
  }

  editMaterial() { 
    this.loading = true;
    if (this.materialFormGroup.valid) {
      const material: Material = {
        ...this.materialFormGroup.value,
      }
      this.materialService.edit(this.id, material).subscribe({
        next: () => {
          this.router.navigate(['/listOfMaterials']);
        },
        error: () => {
          this.isErrorToastShown = true;
          this.loading = false;
        }
      }
    )}
  }

}
