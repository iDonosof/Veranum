import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup, Validators, FormControl } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.component.html',
  styleUrls: ['./usuario-eliminar.component.css']
})
export class UsuarioEliminarComponent implements OnInit {

  UsuarioEliminarForm : FormGroup;
  Correcto : boolean;

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.Correcto = false;
    this.UsuarioEliminarForm = this.formBuilder.group({
      rut: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      nombre: new FormControl({value:'', disabled: true}),
      apellido: new FormControl({value:'', disabled: true}),
      telefono: new FormControl({value:'', disabled: true}),
      direccion: new FormControl({value:'', disabled: true}),
      correo: new FormControl({value:'', disabled: true}),
      nombreUsuario: new FormControl({value:'', disabled: true}),
      contrasena: new FormControl({value:'', disabled: true}),
      empresaId: new FormControl({value: '', disabled: true}),
    });
  }

  ngOnInit() {
  }

  BuscarUsuario() {
    this.http.post('http://127.0.0.1:3000/obtenerUsuarioPorId', {
      rut: this.UsuarioEliminarForm.controls.rut.value
    }).subscribe( ( res : any[] ) => {
      if(res.length != 0) {
        this.UsuarioEliminarForm.controls.rut.setValue(res[0].RUT);
        this.UsuarioEliminarForm.controls.nombre.setValue(res[0].NOMBRE);
        this.UsuarioEliminarForm.controls.apellido.setValue(res[0].APELLIDO);
        this.UsuarioEliminarForm.controls.telefono.setValue(res[0].TELEFONO);
        this.UsuarioEliminarForm.controls.direccion.setValue(res[0].DIRECCION);
        this.UsuarioEliminarForm.controls.correo.setValue(res[0].CORREO);
        this.UsuarioEliminarForm.controls.nombreUsuario.setValue(res[0].NOMBREUSUARIO);
        this.UsuarioEliminarForm.controls.contrasena.setValue(res[0].CONTRASENA);
        this.UsuarioEliminarForm.controls.empresaId.setValue(res[0].EMPRESAID == null? 'No pertenece a alguna empresa' : res[0].EMPRESAID);
      }
      else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        Toast.fire({
          type: 'error',
          title: 'Usuario no encontrado'
        });
      }
    },
    ( error ) => {
      console.log( error );
    });
  }

  EliminarUsuario() {
    if(!this.UsuarioEliminarForm.invalid) {
      if(confirm('¿Esta seguro que desea a eliminar a este usuario?')) {
        this.http.post('http://127.0.0.1:3000/actualizarEstadoUsuario' ,{
          rut: this.UsuarioEliminarForm.controls.rut.value,
          estado: 2
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
              title: 'Eliminado exitosamente'
            });
            this.LimpiarCampos();
          }
          else {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              type: 'error',
              title: 'Ocurrio un error, vuelva a intentarlo mas tarde.'
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

  LimpiarCampos() {
    this.UsuarioEliminarForm.controls.rut.setValue('');
    this.UsuarioEliminarForm.controls.nombre.setValue('');
    this.UsuarioEliminarForm.controls.apellido.setValue('');
    this.UsuarioEliminarForm.controls.telefono.setValue('');
    this.UsuarioEliminarForm.controls.direccion.setValue('');
    this.UsuarioEliminarForm.controls.correo.setValue('');
    this.UsuarioEliminarForm.controls.nombreUsuario.setValue('');
    this.UsuarioEliminarForm.controls.contrasena.setValue('');
    this.UsuarioEliminarForm.controls.empresaId.setValue('');
    this.Correcto = false;
  }

}
