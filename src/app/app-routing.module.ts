import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPatientComponent } from './add-new-patient/add-new-patient.component';
import { AddNewAppointmentComponent } from './add-new-appointment/add-new-appointment.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { HomeComponent } from './home/home.component';
import { ListOfPatientsComponent } from './list-of-patients/list-of-patients.component';
import { AddNewAppointmentForPatientComponent } from './add-new-appointment-for-patient/add-new-appointment-for-patient.component';

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
