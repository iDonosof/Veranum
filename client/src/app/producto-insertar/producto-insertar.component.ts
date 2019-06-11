import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  

@Component({
  selector: 'app-producto-insertar',
  templateUrl: './producto-insertar.component.html',
  styleUrls: ['./producto-insertar.component.css']
})
export class ProductoInsertarComponent implements OnInit {

  Productos = [];
  Hoteles = [];
  InsertarProductoForm : FormGroup;
  constructor( private http : HttpClient, private formBuilder : FormBuilder ) { 
    this.InsertarProductoForm = formBuilder.group( {
      nombre: [''],
      descripcion: [''],
      stockTotal: [''],
      stockDisponible: [''],
      ubicacion: [''],
      hotel: ['']
    });
  }

  ngOnInit() {
    this.CargarHoteles();
  }

  InsertarProducto () {
    this.http.post('http://127.0.0.1:3000/crearProducto', {
      nombre: this.InsertarProductoForm.controls.nombre.value,
      descripcion: this.InsertarProductoForm.controls.descripcion.value,
      stockTotal: this.InsertarProductoForm.controls.stockTotal.value,
      stockDisponible: this.InsertarProductoForm.controls.stockDisponible.value,
      ubicacion: this.InsertarProductoForm.controls.ubicacion.value,
      hotelId: this.InsertarProductoForm.controls.hotel.value
    }).subscribe( ( res : any ) => {
      if( +res == 1) {
        alert('Producto ingresado exitosamente');
        this.LimpiarCampos();
      }
    },
    ( error ) => {  
      console.log( error );
    });
  }

  CargarHoteles() {
    this.http.get('http://127.0.0.1:3000/obtenerhoteles').subscribe( ( res : any[] ) => {
      this.Hoteles = res;
      console.log(this.Hoteles);
    },
    ( error ) => {
      console.log( error );
    });
  }

  LimpiarCampos() {
    this.InsertarProductoForm.controls.nombre.setValue('');
    this.InsertarProductoForm.controls.descripcion.setValue('');
    this.InsertarProductoForm.controls.stockTotal.setValue('');
    this.InsertarProductoForm.controls.stockDisponible.setValue('');
    this.InsertarProductoForm.controls.ubicacion.setValue('');
  }

}
