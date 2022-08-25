import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewAppointmentComponent } from './appointments/add-new-appointment/add-new-appointment.component';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homePage', component: HomeComponent},
  { path: 'addNewPatient', component: AddNewPatientComponent },
  { path: 'listOfPatients', component: ListOfPatientsComponent },
  { path: 'editPatient', component: EditPatientComponent},
  { path: 'addNewAppointment', component: AddNewAppointmentComponent},
  { path: 'addNewAppointmentForPatient', component: AddNewAppointmentForPatientComponent},
  { path: 'listOfAppointments', component: ListOfAppointmentsComponent},
  { path: 'editAppointment', component: EditAppointmentComponent},
  { path: 'addNewMaterial', component: AddNewMaterialComponent},
  { path: 'listOfMaterials', component: ListOfMaterialsComponent},
  { path: 'editMaterial', component: EditMaterialComponent},
  { path: 'addNewService', component: AddNewServiceComponent},
  { path: 'listOfServices', component: ListOfServicesComponent},
  { path: 'editDentalServices', component: EditServiceComponent},
  { path: 'addNewRecord', component: AddNewRecordComponent},
  { path: 'listOfRecords', component: ListOfRecordsComponent},
  { path: 'materialsForAddingToRecord', component: MaterialsForAddingToRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
