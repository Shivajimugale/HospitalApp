import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor(private userService:LoginService, private router:Router) { }
  ngForm!: FormGroup;
  ngOnInit(): void {
    // localStorage.removeItem('token');
  }
  user:User=new User();
  data:{}|any;
  login(){
      this.userService.loginUser(this.user).subscribe(data=>{
  
        console.log(data.token)  
  
        localStorage.setItem("token",data.token);      
  
        this.router.navigate(['patients'])
  
      })
  
    }

  }
