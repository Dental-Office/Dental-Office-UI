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
  submitted = false;

  constructor(private personService: PersonService) { 
    this.basicData = new FormGroup ({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true;
    if(this.basicData.valid){
      alert('Form submitted succesfully!')
      const personObservable = this.personService.postPerson(this.basicData.value);
      personObservable.subscribe();
      console.warn(this.basicData.value);
    }
    
  }
}
