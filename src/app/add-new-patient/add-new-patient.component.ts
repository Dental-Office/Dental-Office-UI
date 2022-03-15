import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {

  basicData = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const personObservable = this.personService.postPerson(this.basicData.value);
    personObservable.subscribe();
    console.warn(this.basicData.value);
  }
}
