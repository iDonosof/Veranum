import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habitacion-actualizar',
  templateUrl: './habitacion-actualizar.component.html',
  styleUrls: ['./habitacion-actualizar.component.css']
})
export class HabitacionActualizarComponent implements OnInit {

  Habitaciones = [];
  Hoteles = [];
  ActualizarForm : FormGroup;
  Correcto : boolean;

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.Correcto = false;
    this.ActualizarForm = this.formBuilder.group({
      habitacion: ['', [Validators.required, Validators.min(0)]],
      numero: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
      camas: ['', [Validators.required]],
      banos: ['', [Validators.required]],
      hotelId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.http.get( 'http://127.0.0.1:3000/obtenerhabitaciones' ).subscribe( ( res : any[] ) => {
      this.Habitaciones = res;
      this.ActualizarForm.controls.habitacion.setValue(this.Habitaciones[0].ID);
    },
    ( error ) => {
      console.log( error )
    });
    this.http.get( 'http://127.0.0.1:3000/obtenerhoteles' ).subscribe( ( res : any[] ) => {
      this.Hoteles = res;
      this.ActualizarForm.controls.hotelId.setValue(this.Hoteles[0].ID);
    },
    ( error ) => {
      console.log(error);
    });
  }

  ActualizarHabitacion () {
    if(!this.ActualizarForm.invalid) {
      this.http.post( 'http://127.0.0.1:3000/actualizarHabitacion', {
        id: this.ActualizarForm.controls.habitacion.value,
        numero: this.ActualizarForm.controls.numero.value,
        capacidad: this.ActualizarForm.controls.capacidad.value,
        camas: this.ActualizarForm.controls.camas.value,
        banos: this.ActualizarForm.controls.banos.value,
        hotelId: this.ActualizarForm.controls.hotelId.value
      }).subscribe( ( res : any) => {
        if( +res == 1)
          alert('Actualizado correctamente');
          this.LimpiarCampos();
      },
      ( error ) => {
        console.log('Error al actualizar');
      });
    }
    else {
      this.Correcto = true;
    }
  }

  HabitacionChanged ( e ) {
    let habitacion : any;
    this.Habitaciones.forEach( h => {
      if(h.ID == e)
        habitacion = h;
    });
    this.ActualizarForm.controls.numero.setValue(habitacion.NUMERO);
    this.ActualizarForm.controls.capacidad.setValue(habitacion.CAPACIDAD);
    this.ActualizarForm.controls.camas.setValue(habitacion.CAMAS);
    this.ActualizarForm.controls.banos.setValue(habitacion.BANOS);
    this.ActualizarForm.controls.hotelId.setValue(habitacion.HOTELID);
  }

  LimpiarCampos() {
    this.Correcto = false;
    this.ActualizarForm.controls.id.setValue(this.Habitaciones[0].ID);
    this.ActualizarForm.controls.numero.setValue('');
    this.ActualizarForm.controls.capacidad.setValue('');
    this.ActualizarForm.controls.camas.setValue('');
    this.ActualizarForm.controls.banos.setValue('');
    this.ActualizarForm.controls.hotelId.setValue(this.Hoteles[0].ID);
  }

}
