import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habitacion-eliminar',
  templateUrl: './habitacion-eliminar.component.html',
  styleUrls: ['./habitacion-eliminar.component.css']
})
export class HabitacionEliminarComponent implements OnInit {

  Hoteles = [];
  Habitaciones = [];
  HabitacionesPorHotel = [];

  EliminarForm : FormGroup;

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) {
    this.EliminarForm = this.formBuilder.group({
      hotelId: [''],
      habitacionId: ['']
    });
  }

  ngOnInit() {
    this.CargarHoteles();
    this.CargarHabitaciones();
  }

  Eliminar () {
    this.http.post( 'http://127.0.0.1:3000/actualizarEstadoHabitacion' , {
      id: this.EliminarForm.controls.habitacionId.value,
      estado: 0
    }).subscribe( ( res : any) => {
      if( +res == 1 ){
        alert('Eliminado exitosamente');
      }else
      {
        alert('Ocurrio un error');
      }
    },
    (error) => {
      console.log(error);
    });
  }

  CargarHoteles () {
    this.http.get( 'http://127.0.0.1:3000/obtenerhoteles' ).subscribe( (res : any[]) => {
      this.Hoteles = res;
    },
    ( error ) => {
      console.log( error );
    }); 
  }

  CargarHabitaciones () {
    this.http.get( 'http://127.0.0.1:3000/obtenerhabitaciones' ).subscribe( ( res : any[] ) => {
      this.Habitaciones = res;
    },
    ( error ) => {
      console.log( error );
    });
  }

  HotelChanged (e) {
    this.HabitacionesPorHotel = [];
    this.Habitaciones.forEach( h => {
      if(h.HOTELID == e)
        this.HabitacionesPorHotel.push( h );
    });
  }

}
