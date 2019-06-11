import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Empresas = [];
  SignupGroup : FormGroup;

  constructor( private http : HttpClient, private formBuilder : FormBuilder, private router : Router) { 
    this.SignupGroup = formBuilder.group({
      rut: [''],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      correo: [''],
      nombreUsuario: [''],
      contrasena: [''],
      empresa: ['']
    });
  }

  ngOnInit() {
    this.http.get( 'http://127.0.0.1:3000/obtenerEmpresas' ).subscribe( ( res : any[] ) => {
      this.Empresas = res;
    },
    ( error ) => {
      console.log(error);
    })
  }

  CrearCuenta () {
    this.http.post( 'http://localhost:3000/crearUsuario', {
      rut : this.SignupGroup.controls.rut.value,
      nombre: this.SignupGroup.controls.nombre.value,
      apellido: this.SignupGroup.controls.apellido.value,
      telefono: this.SignupGroup.controls.telefono.value,
      direccion: this.SignupGroup.controls.direccion.value,
      correo: this.SignupGroup.controls.correo.value,
      nombreUsuario: this.SignupGroup.controls.nombreUsuario.value,
      contrasena: this.SignupGroup.controls.contrasena.value,
      empresaid: this.SignupGroup.controls.empresa.value
    }).subscribe( ( res : any ) => {
      if( +res == 1){
        this.router.navigate(['Login']);
      }
    },
    ( error ) => {
      console.log( error );
    });
  }

}
