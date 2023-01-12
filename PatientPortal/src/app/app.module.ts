import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WellcomeUserComponent } from './wellcome-user/wellcome-user.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { FileuploadingComponent } from './fileuploading/fileuploading.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WellcomeUserComponent,
    PatientlistComponent,
    CreatepatientComponent,
    UpdatePatientComponent,
    FileuploadingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
