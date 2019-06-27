import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms'; 
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-producto-eliminar',
  templateUrl: './producto-eliminar.component.html',
  styleUrls: ['./producto-eliminar.component.css']
})
export class ProductoEliminarComponent implements OnInit {

  Productos = [];
  productoEliminarForm : FormGroup;
  Correcto : boolean;

  constructor( private http : HttpClient, private formBuilder : FormBuilder ) { 
    this.Correcto = false;
    this.productoEliminarForm = this.formBuilder.group( {
      idProducto: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.CargarProductos();
  }

  CargarProductos() {
    this.http.get('http://127.0.0.1:3000/obtenerProductos').subscribe( ( res : any[] ) => {
      this.Productos = res;
    },
    ( error ) => {
       console.log( error );
    });
  }


  EliminarProducto () {
    if(!this.productoEliminarForm.invalid) {
      this.http.post('http://127.0.0.1:3000/actualizarEstadoProducto', {
      id: this.productoEliminarForm.controls.idProducto.value,
      estado: 2
      }).subscribe( ( res : any ) => {
        if( +res == 1) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'success',
            title: 'Producto eliminado'
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
            title: 'Ocurrio un error, intentelo mas tarde'
          });
        }
        this.CargarProductos();
      },
      ( error ) => {
        console.log( error );
      });
    }
    else {
      this.Correcto = false;
    }
  }

  LimpiarCampos() {
    this.CargarProductos();
    this.Correcto = false;
  }
}
