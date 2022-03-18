import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxValidator } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {

  basicData: FormGroup;

  constructor(private personService: PersonService) { 
    this.basicData = new FormGroup ({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if(this.basicData.valid){
      alert('Form submitted succesfully!')
      const personObservable = this.personService.postPerson(this.basicData.value);
      personObservable.subscribe();
      console.warn(this.basicData.value);
    }
  
  }
}
