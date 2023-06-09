import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewAppointmentComponent } from './appointments/add-new-appointment/add-new-appointment.component';
import { AddNewPatientComponent } from './patients/add-new-patient/add-new-patient.component';
import { ListOfPatientsComponent } from './patients/list-of-patients/list-of-patients.component';
import { AddNewAppointmentForPatientComponent } from './appointments/add-new-appointment-for-patient/add-new-appointment-for-patient.component';
import { ListOfAppointmentsComponent } from './appointments/list-of-appointments/list-of-appointments.component';
import { EditAppointmentComponent } from './appointments/edit-appointment/edit-appointment.component';
import { AddNewMaterialComponent } from './materials/add-new-material/add-new-material.component';
import { ListOfMaterialsComponent } from './materials/list-of-materials/list-of-materials.component';
import { EditMaterialComponent } from './materials/edit-material/edit-material.component';
import { AddNewServiceComponent } from './services/add-new-service/add-new-service.component';
import { ListOfServicesComponent } from './services/list-of-services/list-of-services.component';
import { EditServiceComponent } from './services/edit-service/edit-service.component';
import { AddNewRecordComponent } from './patient_record/add-new-record/add-new-record.component';
import { ListOfRecordsComponent } from './patient_record/list-of-records/list-of-records.component';
import { MaterialsForAddingToRecordComponent } from './materials/materials-for-adding-to-record/materials-for-adding-to-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNewPatientComponent,
    ListOfPatientsComponent,
    EditPatientComponent,
    NavbarComponent,
    AddNewAppointmentComponent,
    AddNewAppointmentForPatientComponent,
    ListOfAppointmentsComponent,
    EditAppointmentComponent,
    AddNewMaterialComponent,
    ListOfMaterialsComponent,
    EditMaterialComponent,
    AddNewServiceComponent,
    ListOfServicesComponent,
    EditServiceComponent,
    AddNewRecordComponent,
    ListOfRecordsComponent,
    MaterialsForAddingToRecordComponent
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
