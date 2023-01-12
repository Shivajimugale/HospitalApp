import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
    
  baseurl='http://localhost:8084/auth/user/v1/loginUser'
  //baseurl='http://localhost:8084/auth/user/v1/loginUser'
  
  loginUser(user:User) :Observable<any>{
    return this.httpClient.post<User>(`${this.baseurl}`, user);
  }
}
