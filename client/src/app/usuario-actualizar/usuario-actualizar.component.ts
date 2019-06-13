import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.css']
})
export class UsuarioActualizarComponent implements OnInit {

  Empresas = [];
  UsuarioActualizarForm : FormGroup;

  constructor( private http : HttpClient, private formBuilder : FormBuilder ) {
    this.UsuarioActualizarForm = this.formBuilder.group({
      rut: [''],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      correo: [''],
      nombreUsuario: [''],
      contrasena: [''],
      empresaId: [0]
    });
  }

  ngOnInit() {
    this.CargarEmpresas();
  }

  CargarEmpresas() {
    this.http.get('http://127.0.0.1:3000/obtenerEmpresas').subscribe( ( res : any[] ) => {
       this.Empresas = res;
    },
    ( error ) => {
      console.log( error );
    });
  }

  ActualizarUsuario() {
    this.http.post('http://127.0.0.1:3000/actualizarUsuario', {
      rut: this.UsuarioActualizarForm.controls.rut.value,
      nombre: this.UsuarioActualizarForm.controls.nombre.value,
      apellido: this.UsuarioActualizarForm.controls.apellido.value,
      telefono: this.UsuarioActualizarForm.controls.telefono.value,
      direccion: this.UsuarioActualizarForm.controls.direccion.value,
      correo: this.UsuarioActualizarForm.controls.correo.value,
      nombreUsuario: this.UsuarioActualizarForm.controls.nombreUsuario.value,
      contrasena: this.UsuarioActualizarForm.controls.contrasena.value,
      empresaid: this.UsuarioActualizarForm.controls.empresaId.value
    }).subscribe( ( res : any ) => {
      if( +res == 1 ) {
        alert('Usuario actualizado exitosamente')
        this.LimpiarCampos();
      }
      else{
        alert('Ocurrio un error, intentar mas tarde.');
      }
    },
    ( error ) => {
      console.log( error );
    });
  }

  BuscarUsuario () {
    this.http.post('http://127.0.0.1:3000/obtenerUsuarioPorId', {
      rut: this.UsuarioActualizarForm.controls.rut.value
    }).subscribe( ( res : any ) => {
      res = res[0];
      this.UsuarioActualizarForm.controls.rut.setValue(res.RUT);
      this.UsuarioActualizarForm.controls.nombre.setValue(res.NOMBRE);
      this.UsuarioActualizarForm.controls.apellido.setValue(res.APELLIDO);
      this.UsuarioActualizarForm.controls.telefono.setValue(res.TELEFONO);
      this.UsuarioActualizarForm.controls.direccion.setValue(res.DIRECCION);
      this.UsuarioActualizarForm.controls.correo.setValue(res.CORREO);
      this.UsuarioActualizarForm.controls.nombreUsuario.setValue(res.NOMBREUSUARIO);
      this.UsuarioActualizarForm.controls.contrasena.setValue(res.CONTRASENA);
      this.UsuarioActualizarForm.controls.empresaId.setValue(res.EMPRESAID == null ? 0 : res.EMPRESAID);
    },
    ( error ) => {
      console.log( error );
    });
  }

  LimpiarCampos() {
    this.UsuarioActualizarForm.controls.rut.setValue('');
    this.UsuarioActualizarForm.controls.nombre.setValue('');
    this.UsuarioActualizarForm.controls.apellido.setValue('');
    this.UsuarioActualizarForm.controls.telefono.setValue('');
    this.UsuarioActualizarForm.controls.direccion.setValue('');
    this.UsuarioActualizarForm.controls.correo.setValue('');
    this.UsuarioActualizarForm.controls.nombreUsuario.setValue('');
    this.UsuarioActualizarForm.controls.contrasena.setValue('');
    this.UsuarioActualizarForm.controls.empresaId.setValue('' );
  }
}
