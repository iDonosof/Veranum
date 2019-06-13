import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup, Validators, FormControl } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.component.html',
  styleUrls: ['./usuario-eliminar.component.css']
})
export class UsuarioEliminarComponent implements OnInit {

  UsuarioEliminarForm : FormGroup;

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.UsuarioEliminarForm = this.formBuilder.group({
      rut: [''],
      nombre: new FormControl({value:'', disabled: true}),
      apellido: new FormControl({value:'', disabled: true}),
      telefono: new FormControl({value:'', disabled: true}),
      direccion: new FormControl({value:'', disabled: true}),
      correo: new FormControl({value:'', disabled: true}),
      nombreUsuario: new FormControl({value:'', disabled: true}),
      contrasena: new FormControl({value:'', disabled: true}),
      empresaId: new FormControl({value: 0, disabled: true}),
    });
  }

  ngOnInit() {
  }

  BuscarUsuario() {
    this.http.post('http://127.0.0.1:3000/obtenerUsuarioPorId', {
      rut: this.UsuarioEliminarForm.controls.rut.value
    }).subscribe( ( res : any[] ) => {
      if(res) {
        res = res[0];
        this.UsuarioEliminarForm.controls.rut.setValue(res.RUT);
        this.UsuarioEliminarForm.controls.nombre.setValue(res.NOMBRE);
        this.UsuarioEliminarForm.controls.apellido.setValue(res.APELLIDO);
        this.UsuarioEliminarForm.controls.telefono.setValue(res.TELEFONO);
        this.UsuarioEliminarForm.controls.direccion.setValue(res.DIRECCION);
        this.UsuarioEliminarForm.controls.correo.setValue(res.CORREO);
        this.UsuarioEliminarForm.controls.nombreUsuario.setValue(res.NOMBREUSUARIO);
        this.UsuarioEliminarForm.controls.contrasena.setValue(res.CONTRASENA);
        this.UsuarioEliminarForm.controls.empresaId.setValue(res.EMPRESAID);
      }
      else {
        alert('Usuario no encontrado');
      }
    },
    ( error ) => {
      console.log( error );
    });
  }

  EliminarUsuario() {
    if(confirm('¿Esta seguro que desea a eliminar a este usuario?')) {
      this.http.post('http://127.0.0.1:3000/actualizarEstadoUsuario' ,{
        rut: this.UsuarioEliminarForm.controls.rut.value,
        estado: 2
      }).subscribe( ( res : any ) => {
        if( +res == 1 ) {
          alert('Eliminado exitosamente');
          this.LimpiarCampos();
        }
        else {
          alert('Ocurrio un error, vuelva a intentarlo mas tarde.')
        }
      },
      ( error ) => {
        console.log( error );
      });
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
  }

}
