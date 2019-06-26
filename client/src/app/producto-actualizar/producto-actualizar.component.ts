import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms';  

@Component({
  selector: 'app-producto-actualizar',
  templateUrl: './producto-actualizar.component.html',
  styleUrls: ['./producto-actualizar.component.css']
})
export class ProductoActualizarComponent implements OnInit {

  Hoteles = [];
  Productos = [];
  Correcto : boolean;
  ActualizarProductoForm : FormGroup

  constructor( private http : HttpClient, private formBuilder : FormBuilder ) { 
    this.Correcto = false;
    this.ActualizarProductoForm = formBuilder.group( {
      idProducto: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      stockTotal: ['', [Validators.required, Validators.min(0)]],
      stockDisponible: ['', [Validators.required, Validators.min(0)]],
      ubicacion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      hotel: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.CargarHoteles();
    this.CargarProductos();
  }

  CargarHoteles () {
    this.http.get('http://127.0.0.1:3000/obtenerhoteles').subscribe( ( res : any[] ) => {
      this.Hoteles = res;
      },
      ( error ) => {
        console.log( error );
    });
  }

  CargarProductos () {
    this.http.get('http://127.0.0.1:3000/obtenerProductos').subscribe( ( res : any[] ) => {
      this.Productos = res;
    },
    ( error ) => {
      console.log( error );
    });
  }

  ActualizarProducto() {
    if(!this.ActualizarProductoForm.invalid) {
      this.http.post('http://127.0.0.1:3000/actualizarProducto', {
        id: this.ActualizarProductoForm.controls.idProducto.value,
        nombre: this.ActualizarProductoForm.controls.nombre.value,
        descripcion: this.ActualizarProductoForm.controls.descripcion.value,
        stockTotal: this.ActualizarProductoForm.controls.stockTotal.value,
        stockDisponible: this.ActualizarProductoForm.controls.stockDisponible.value,
        ubicacion: this.ActualizarProductoForm.controls.ubicacion.value,
        hotelId: this.ActualizarProductoForm.controls.hotel.value
      }).subscribe( ( res : any ) => {
        alert('Producto actualizado');
        this.CargarHoteles();
        this.CargarProductos();
        this.LimpiarCampos();
      },
      ( error ) => {
        console.log( error );
      });
    }
    else {
      this.Correcto = true;
    }
  }

  ProductoChanged ( e : any ) {
    let producto : any;
    this.Productos.forEach( p => {
      if(p.ID == e)
        producto = p;
    });
    this.ActualizarProductoForm.controls.idProducto.setValue(producto.ID);
    this.ActualizarProductoForm.controls.nombre.setValue(producto.NOMBRE);
    this.ActualizarProductoForm.controls.descripcion.setValue(producto.DESCRIPCION);
    this.ActualizarProductoForm.controls.stockTotal.setValue(producto.STOCK_TOTAL);
    this.ActualizarProductoForm.controls.stockDisponible.setValue(producto.STOCK_DISPONIBLE);
    this.ActualizarProductoForm.controls.ubicacion.setValue(producto.UBICACION);
    this.ActualizarProductoForm.controls.hotel.setValue(producto.HOTELID);
  }

  LimpiarCampos () {
    this.ActualizarProductoForm.controls.idProducto.setValue('');
    this.ActualizarProductoForm.controls.nombre.setValue('');
    this.ActualizarProductoForm.controls.descripcion.setValue('');
    this.ActualizarProductoForm.controls.stockTotal.setValue('');
    this.ActualizarProductoForm.controls.stockDisponible.setValue('');
    this.ActualizarProductoForm.controls.ubicacion.setValue('');
    this.ActualizarProductoForm.controls.hotel.setValue('');
    this.Correcto = false;
  }

}
