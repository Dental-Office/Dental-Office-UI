import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {

  basicData: FormGroup;
  model!: NgbDateStruct;

  constructor(private personService: PersonService) { 
    this.basicData = new FormGroup ({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      dateOfBirth: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]),
    },
    { updateOn: "blur"});
  }

  ngOnInit(): void { 
  }

  onSubmit() {
    if(this.basicData.valid){
      alert('Form submitted succesfully!')
      const personObservable = this.personService.postPerson(this.basicData.value);
      personObservable.subscribe();
      console.warn(this.basicData.value);
    }
  
  }
}
