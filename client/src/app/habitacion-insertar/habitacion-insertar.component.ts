import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habitacion-insertar',
  templateUrl: './habitacion-insertar.component.html',
  styleUrls: ['./habitacion-insertar.component.css']
})
export class HabitacionInsertarComponent implements OnInit {

  Correcto : boolean;
  HabitacionForm : FormGroup;
  Hoteles = [];

  constructor( private formBuilder : FormBuilder, private http : HttpClient) { 
    this.HabitacionForm = this.formBuilder.group({
      numero: ['', [Validators.required, Validators.min(0)]],
      camas: ['', [Validators.required, Validators.min(0)]],
      capacidad: ['', [Validators.required, Validators.min(0)]],
      banos: ['', [Validators.required, Validators.min(0)]],
      hotel: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.http.get( 'http://127.0.0.1:3000/obtenerHoteles' ).subscribe( ( res : any[]) => {
      this.Hoteles = res;
      this.HabitacionForm.controls.hotel.setValue(this.Hoteles[0].ID);
    },
    ( error ) => {
      console.log(error);
    });
  }

  IngresarHabitacion () {
    if(!this.HabitacionForm.invalid) {
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
    else {
      this.Correcto = true;
    }
  }

  LimpiarCampos() {
    this.HabitacionForm.controls.numero.setValue('');
    this.HabitacionForm.controls.capacidad.setValue('');
    this.HabitacionForm.controls.camas.setValue('');
    this.HabitacionForm.controls.banos.setValue('');
    this.HabitacionForm.controls.hotelId.setValue(this.Hoteles[0].ID);
    this.Correcto = false;
  }

}
