import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms'; 
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-producto-insertar',
  templateUrl: './producto-insertar.component.html',
  styleUrls: ['./producto-insertar.component.css']
})
export class ProductoInsertarComponent implements OnInit {

  Productos = [];
  Hoteles = [];
  InsertarProductoForm : FormGroup;
  Correcto : boolean;
  constructor( private http : HttpClient, private formBuilder : FormBuilder ) { 
    this.Correcto = false;
    this.InsertarProductoForm = formBuilder.group( {
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      stockTotal: [0, [Validators.required, Validators.min(1)]],
      stockDisponible: [0, [Validators.required, Validators.min(0)]],
      ubicacion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      hotel: ['']
    });
  }

  ngOnInit() {
    this.CargarHoteles();
  }

  InsertarProducto () {
    if(!this.InsertarProductoForm.invalid) {
      this.http.post('http://127.0.0.1:3000/crearProducto', {
        nombre: this.InsertarProductoForm.controls.nombre.value,
        descripcion: this.InsertarProductoForm.controls.descripcion.value,
        stockTotal: this.InsertarProductoForm.controls.stockTotal.value,
        stockDisponible: this.InsertarProductoForm.controls.stockDisponible.value,
        ubicacion: this.InsertarProductoForm.controls.ubicacion.value,
        hotelId: this.InsertarProductoForm.controls.hotel.value
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
            title: 'Producto ingresado exitosamente'
          });
          this.LimpiarCampos();
        }
      },
      ( error ) => {  
        console.log( error );
      });
    }
    else {
      this.Correcto = true;
    }
  }

  CargarHoteles() {
    this.http.get('http://127.0.0.1:3000/obtenerhoteles').subscribe( ( res : any[] ) => {
      this.Hoteles = res;
      this.InsertarProductoForm.controls.hotelId.setValue(this.Hoteles[0].ID);
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
    this.Correcto = false;
  }

}
