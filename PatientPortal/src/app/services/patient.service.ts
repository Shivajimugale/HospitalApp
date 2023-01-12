import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 //baseurl: string;
//res:any;
  // getPatientDetails(patientId: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private httpClient: HttpClient) { 
   //this.baseurl=res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8084');
//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8084');
  // this.baseurl='http://localhost:8084/patient/getalls'
  }

  getPatientsList(): Observable<Patient[]>{
   //return this.httpClient.get<Patient[]>('http://localhost:8084/patient/getalls');
    return this.httpClient.get<Patient[]>('http://localhost:8084/patient/getalls',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
//    let headers = new Headers();
//  headers.append('Content-Type', 'application/json');
//  headers.append('Accept', 'application/json');
//  headers.append('Access-Control-Allow-Origin', 'http://localhost:8084');
//  headers.append('Access-Control-Allow-Credentials', 'true');
//  //headers.append('Authorization','Bearer ' + ${localStorage.getItem('token')});
// return this.httpClient.get<Patient[]>('http://localhost:8084/patient/getalls'+{ headers: headers });
 }
createPatient(patient: Patient): Observable<Object>{
  //return this.httpClient.post('http://localhost:8084/patient/registerPatient',patient);
  return this.httpClient.post('http://localhost:8084/patient/registerPatient', patient,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
}
getPatientByPatientId(patientId: number): Observable<any>{
 //return this.httpClient.get<Patient>(`${'http://localhost:8084/patient/info/'}${patientId}`);
   return this.httpClient.get<Patient>(`${'http://localhost:8084/patient/info/'}${patientId}`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
}
updatePatient(patientId:number,patient:Patient):Observable<Object>{
 // return this.httpClient.put('http://localhost:8084/patient/update/'+patientId,patient);
 return this.httpClient.put('http://localhost:8084/patient/update/'+patientId,patient,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
}
deletePatient(patientId: number): Observable<Object>{
   //return this.httpClient.delete('http://localhost:8084/patient/delete/'+patientId);
 return this.httpClient.delete('http://localhost:8084/patient/delete/'+patientId,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
}
}
