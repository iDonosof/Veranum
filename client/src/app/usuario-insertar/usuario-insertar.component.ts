import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-insertar',
  templateUrl: './usuario-insertar.component.html',
  styleUrls: ['./usuario-insertar.component.css']
})
export class UsuarioInsertarComponent implements OnInit {

  UsuarioInsertarForm : FormGroup;
  Empresas = [];

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.UsuarioInsertarForm = this.formBuilder.group({
      rut: [''],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      correo: [''],
      nombreUsuario: [''],
      contrasena: [''],
      empresaId: ['']
    });
  }

  ngOnInit() {
    this.CargarEmpresas();
  }

  CargarEmpresas() {
    this.http.get('http://127.0.0.1:3000/obtenerEmpresas').subscribe( ( res : any[]) => {
    this.Empresas = res;
    },
    ( error ) => {
      console.log( error );
    });
  }

  InsertarUsuario() {
    if(confirm('¿Esta seguro de ingresar un nuevo usuario?')) {
      this.http.post('http://127.0.0.1:3000/crearUsuario', {
        rut: this.UsuarioInsertarForm.controls.rut.value,
        nombre: this.UsuarioInsertarForm.controls.nombre.value,
        apellido: this.UsuarioInsertarForm.controls.apellido.value,
        telefono: this.UsuarioInsertarForm.controls.telefono.value,
        direccion: this.UsuarioInsertarForm.controls.direccion.value,
        correo: this.UsuarioInsertarForm.controls.correo.value,
        nombreUsuario: this.UsuarioInsertarForm.controls.nombreUsuario.value,
        contrasena: this.UsuarioInsertarForm.controls.contrasena.value,
        empresaId: this.UsuarioInsertarForm.controls.empresaId.value,
      }).subscribe( ( res : any ) => {
        if( +res == 1 ) {
          alert('Usuario ingresado exitosamente');
          this.LimpiarCampos();
        }
        else
          alert('Ocurrio un error, intente mas tarde.')
      },
      ( error ) => {
        console.log( error );
      });
    }
  }

  LimpiarCampos() {
    this.UsuarioInsertarForm.controls.rut.setValue('');
    this.UsuarioInsertarForm.controls.nombre.setValue('');
    this.UsuarioInsertarForm.controls.apellido.setValue('');
    this.UsuarioInsertarForm.controls.telefono.setValue('');
    this.UsuarioInsertarForm.controls.direccion.setValue('');
    this.UsuarioInsertarForm.controls.correo.setValue('');
    this.UsuarioInsertarForm.controls.nombreUsuario.setValue('');
    this.UsuarioInsertarForm.controls.contrasena.setValue('');
    this.UsuarioInsertarForm.controls.empresaId.setValue('');
  }

}
