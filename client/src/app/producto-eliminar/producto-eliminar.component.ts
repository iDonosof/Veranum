import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  

@Component({
  selector: 'app-producto-eliminar',
  templateUrl: './producto-eliminar.component.html',
  styleUrls: ['./producto-eliminar.component.css']
})
export class ProductoEliminarComponent implements OnInit {

  Productos = [];
  productoEliminarForm : FormGroup;

  constructor( private http : HttpClient, private formBuilder : FormBuilder ) { 
    this.productoEliminarForm = this.formBuilder.group( {
      idProducto: ['']
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
    this.http.post('http://127.0.0.1:3000/actualizarEstadoProducto', {
    id: this.productoEliminarForm.controls.idProducto.value,
    estado: 2
    }).subscribe( ( res : any ) => {
      if( +res == 1) {
        alert('Producto eliminado');
      }
      else {
        alert('Ocurrio un error, intentelo mas tarde');
      }
      this.CargarProductos();
    },
    ( error ) => {
      console.log( error );
    });
  }
}
