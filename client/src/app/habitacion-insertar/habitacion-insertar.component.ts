import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habitacion-insertar',
  templateUrl: './habitacion-insertar.component.html',
  styleUrls: ['./habitacion-insertar.component.css']
})
export class HabitacionInsertarComponent implements OnInit {

  HabitacionForm : FormGroup;
  Hoteles = [];

  constructor( private formBuilder : FormBuilder, private http : HttpClient) { 
    this.HabitacionForm = this.formBuilder.group({
      numero: [''],
      camas: [''],
      capacidad: [''],
      banos: [''],
      hotel: ['']
    });
  }

  ngOnInit() {
    this.http.get( 'http://127.0.0.1:3000/obtenerHoteles' ).subscribe( ( res : any[]) => {
      this.Hoteles = res;
    },
    ( error ) => {
      console.log(error);
    });
  }

  IngresarHabitacion () {
    this.http.post( 'http://127.0.0.1:3000/crearHabitacion' , {
      numero: this.HabitacionForm.controls.numero.value,
      capacidad: this.HabitacionForm.controls.capacidad.value,
      camas: this.HabitacionForm.controls.camas.value,
      banos: this.HabitacionForm.controls.banos.value,
      hotelId: this.HabitacionForm.controls.hotel.value
    }).subscribe( ( res : any) => {
      if( +res == 1) {
        alert('La habitacion se ha agregado correctamente');
      }
    },
    ( error ) => {

    });
  }

}
