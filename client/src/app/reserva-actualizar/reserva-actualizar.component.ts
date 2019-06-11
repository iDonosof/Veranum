import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reserva-actualizar',
  templateUrl: './reserva-actualizar.component.html',
  styleUrls: ['./reserva-actualizar.component.css']
})
export class ReservaActualizarComponent implements OnInit {

  ReservaActualizarForm : FormGroup;

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.ReservaActualizarForm = this.formBuilder.group( {
      id: [''],
      fechaInicio: [''],
      fechaTermino: [''],
      total: [''],
      medioPago: [''],
      habitacionId: [''],
      usuarioId: ['']
    });
    this.ReservaActualizarForm.controls.total.disable();
    this.ReservaActualizarForm.controls.habitacionId.disable();
  }

  ngOnInit() {
  }


  ActualizarReserva() {
    if(confirm('¿Seguro que desea actualizar la reserva?')) {
      this.http.post('http://127.0.0.1:3000/actualizarReserva', {
        id: this.ReservaActualizarForm.controls.id.value,
        fechaInicio: this.ReservaActualizarForm.controls.fechaInicio.value,
        fechaTermino: this.ReservaActualizarForm.controls.fechaTermino.value
      }).subscribe( ( res : any ) => {
        if( +res == 1 ) {
          alert('Reserva actualizada correctamente');
        }
      },
      ( error ) => {
        console.log( error );
      });
    }
  }

  BuscarReserva() {
    if(this.ReservaActualizarForm.controls.id.value.trim() != '') {
      this.http.post('http://127.0.0.1:3000/obtenerReservasPorId', {
        id: this.ReservaActualizarForm.controls.id.value
      }).subscribe( ( res : any[] ) => {
        this.RellenarDatos( res[0] );
      },
      ( error ) => {
        console.log( error );
      });
    }
    else if(this.ReservaActualizarForm.controls.usuarioId.value.trim() != '') {
      this.http.post('http://127.0.0.1:3000/obtenerReservasPorUsuario', {
        rut: this.ReservaActualizarForm.controls.usuarioId.value
      }).subscribe( ( res : any[] ) => {
        this.RellenarDatos( res[0] );
      },
      ( error ) => {
        console.log( error );
      });
    }
    else {
      alert('Rut incorrecto o codigo incorrecto');
    }
  }

  RellenarDatos( row ) {
    this.ReservaActualizarForm.controls.id.setValue(row.ID);
    this.ReservaActualizarForm.controls.fechaInicio.setValue(row.FECHA_INICIO);
    this.ReservaActualizarForm.controls.fechaTermino.setValue(row.FECHA_TERMINO);
    this.ReservaActualizarForm.controls.total.setValue(row.TOTAL);
    this.ReservaActualizarForm.controls.medioPago.setValue(row.MEDIO_PAGO);
    this.ReservaActualizarForm.controls.habitacionId.setValue(row.HABITACIONID);
    this.ReservaActualizarForm.controls.usuarioId.setValue(row.USUARIOID);
  }
}
