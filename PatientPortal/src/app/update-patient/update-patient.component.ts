import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patient:Patient =new Patient();
  private id:any;

  constructor(private http:HttpClient, private patientService:PatientService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit(): void {
  

  this.patient=new Patient();

   

  this.id=this.route.snapshot.params['id'];

  this.patientService.getPatientByPatientId(this.id).subscribe((data: any)=>{

    console.log(data);

    this.patient=data;



  })

}
onupdate(){

  this.patientService.updatePatient(this.id,this.patient).subscribe(data=>{

    console.log(data);

    this.patient=new Patient();

    
    },error=>{

      console.log(error);

   this.router.navigate(['patients'])

    })

  }

}


