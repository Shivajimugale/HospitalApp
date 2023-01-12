import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { FileuploadingComponent } from './fileuploading/fileuploading.component';
import { LoginComponent } from './login/login.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

import { WellcomeUserComponent } from './wellcome-user/wellcome-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
 {path:'',redirectTo:'/login',pathMatch:'full'},
 {path: 'patients', component:PatientlistComponent},
 {path:'fileupload',component:FileuploadingComponent},
 
  {path: 'createpatient', component:CreatepatientComponent},
  {path: 'update-patient/:id', component:UpdatePatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
