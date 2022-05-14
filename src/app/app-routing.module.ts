import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPatientComponent } from './add-new-patient/add-new-patient.component';
import { AddNewTerminComponent } from './add-new-termin/add-new-termin.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { HomeComponent } from './home/home.component';
import { ListOfPatientsComponent } from './list-of-patients/list-of-patients.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homePage', component: HomeComponent},
  { path: 'addNewPatient', component: AddNewPatientComponent },
  { path: 'listOfPatients', component: ListOfPatientsComponent },
  { path: 'editPatient', component: EditPatientComponent},
  { path: 'addNewTermin', component: AddNewTerminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
