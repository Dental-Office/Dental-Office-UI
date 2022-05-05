import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Dental clinic';
  
  constructor() { }
  image =  'assets/image.jpg';

  ngOnInit(): void {
  }

}
