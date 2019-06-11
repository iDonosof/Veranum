import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  LoginForm : FormGroup;
  constructor( private http : HttpClient , formBuilder : FormBuilder, private router : Router) { 
    this.LoginForm = formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {

  }

  Login() {
    this.http.post("http://127.0.0.1:3000/loginDatos",{
      'username': this.LoginForm.controls.username.value,
      'contrasena': this.LoginForm.controls.password.value
    }).subscribe((res : any[]) => {
      if(res[0] != null && res[0] != undefined) {
        localStorage.setItem('username', this.LoginForm.controls.username.value);
        localStorage.setItem('rut', res[0].RUT);
        this.router.navigate(['']);
      }
      else
      {
        alert('Usuario o contraseña incorrectos');
      }
    }, 
    (error) => {
      console.log(error);
    });
  }

}
