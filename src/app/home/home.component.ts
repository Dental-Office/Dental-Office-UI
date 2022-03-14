import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Dental clinic';
  
  constructor(private router: Router) { }

  goToAddNewPatient(): void {
    this.router.navigate(['/addNewPatient']);
  }

  ngOnInit(): void {
  }

}
