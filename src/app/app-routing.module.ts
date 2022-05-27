import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewAppointmentComponent } from './appointments/add-new-appointment/add-new-appointment.component';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';
import { HomeComponent } from './home/home.component';
import { AddNewPatientComponent } from './patients/add-new-patient/add-new-patient.component';
import { ListOfPatientsComponent } from './patients/list-of-patients/list-of-patients.component';
import { AddNewAppointmentForPatientComponent } from './appointments/add-new-appointment-for-patient/add-new-appointment-for-patient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homePage', component: HomeComponent},
  { path: 'addNewPatient', component: AddNewPatientComponent },
  { path: 'listOfPatients', component: ListOfPatientsComponent },
  { path: 'editPatient', component: EditPatientComponent},
  { path: 'addNewAppointment', component: AddNewAppointmentComponent},
  { path: 'addNewAppointmentForPatient', component: AddNewAppointmentForPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
