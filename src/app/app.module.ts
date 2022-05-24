import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewPatientComponent } from './add-new-patient/add-new-patient.component';
import { AppRoutingModule } from './app-routing.module';
import { ListOfPatientsComponent } from './list-of-patients/list-of-patients.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewAppointmentComponent } from './add-new-appointment/add-new-appointment.component';
import { AddNewAppointmentForPatientComponent } from './add-new-appointment-for-patient/add-new-appointment-for-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNewPatientComponent,
    ListOfPatientsComponent,
    EditPatientComponent,
    NavbarComponent,
    AddNewAppointmentComponent,
    AddNewAppointmentForPatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
