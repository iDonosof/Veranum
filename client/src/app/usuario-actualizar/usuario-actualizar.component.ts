import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.css']
})
export class UsuarioActualizarComponent implements OnInit {

  Empresas = [];
  UsuarioActualizarForm : FormGroup;
  Correcto : boolean

  constructor( private http : HttpClient, private formBuilder : FormBuilder ) {
    this.Correcto = false;
    this.UsuarioActualizarForm = this.formBuilder.group({
      rut: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(9)]],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      direccion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      correo: ['', [Validators.required, Validators.email]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      contrasena: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      empresaId: [0, [Validators.required]]
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
    console.log(this.UsuarioActualizarForm);
    if(!this.UsuarioActualizarForm.invalid) {
      if(confirm('¿Seguro que desea actualizar al usuario?')) {
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
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              type: 'success',
              title: 'Usuario actualizado exitosamente'
            });
            this.LimpiarCampos();
          }
          else{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              type: 'error',
              title: 'Ocurrio un error, intentar mas tarde.'
            });
          }
        },
        ( error ) => {
          console.log( error );
        });
      }
    }
    else {
      this.Correcto = true;
    }
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
    this.Correcto = false;
  }
}
