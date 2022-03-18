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
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.pattern('((((\\b[1-9]\\b|1[0-9]|2[0-8])[-]([1-9]|1[0-2]))|((29|30|31)[-]([13578]|1[02]))|((29|30)[-]([469]|11)))[-]([0-9][0-9][0-9][0-9]))|(29[-]2[-](([0-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)))')]),
      phoneNumber: new FormControl(''),
    },
    { updateOn: "blur"});
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
