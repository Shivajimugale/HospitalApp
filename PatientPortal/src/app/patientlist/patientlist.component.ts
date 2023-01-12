import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
  patients:Patient[] | any;
  getPatients: any;
  selectedFile: any;


  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.patient();
  }

  patient(){
    this.patientService.getPatientsList().subscribe(data => {
      this.patients = data;
    });
  }
  updatePatient(patientId: number){
    console.log("patient updated "+patientId);
    this.router.navigate(['update-patient', patientId]);

  }

  deletePatient(patientId: number){
    this.patientService.deletePatient(patientId).subscribe( data => {
      console.log(data);
      this.getPatients();
    })
  }
  createpatient(){
    this.router.navigate(['createpatient']);
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files;
    this.router.navigate(['patients']);
    }

   

}
