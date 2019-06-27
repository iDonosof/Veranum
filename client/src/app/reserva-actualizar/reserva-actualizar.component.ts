import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserva-actualizar',
  templateUrl: './reserva-actualizar.component.html',
  styleUrls: ['./reserva-actualizar.component.css']
})
export class ReservaActualizarComponent implements OnInit {

  ReservaActualizarForm : FormGroup;
  Correcto : boolean;

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.Correcto = false;
    this.ReservaActualizarForm = this.formBuilder.group( {
      id: ['', [Validators.required, Validators.min(0)]],
      fechaInicio: ['', [Validators.required]],
      fechaTermino: ['', [Validators.required]],
      total: ['', Validators.required, Validators.min(0)],
      medioPago: [0, [Validators.required, Validators.min(0), Validators.max(2)]],
      habitacionId: ['', Validators.required, Validators.min(0)],
      usuarioId: ['', Validators.required]
    });
    this.ReservaActualizarForm.controls.total.disable();
    this.ReservaActualizarForm.controls.habitacionId.disable();
  }

  ngOnInit() {
  }


  ActualizarReserva() {
    console.log(this.ReservaActualizarForm);
    if(!this.ReservaActualizarForm.invalid) {
      if(confirm('¿Seguro que desea actualizar la reserva?')) {
        this.http.post('http://127.0.0.1:3000/actualizarReserva', {
          id: this.ReservaActualizarForm.controls.id.value,
          fechaInicio: this.ReservaActualizarForm.controls.fechaInicio.value,
          fechaTermino: this.ReservaActualizarForm.controls.fechaTermino.value
        }).subscribe( ( res : any ) => {
          if( +res == 1 ) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            
            Toast.fire({
              type: 'success',
              title: 'Reserva actualizada correctamente'
            });
            this.LimpiarCampos();
          }
        },
        ( error ) => {
          console.log( error );
        });
      }
    }
    else {
      this.Correcto = true;
    }
  }

  BuscarReserva() {
    this.Correcto = false;
    if(this.ReservaActualizarForm.controls.id.value != '') {
      this.http.post('http://127.0.0.1:3000/obtenerReservasPorId', {
        id: this.ReservaActualizarForm.controls.id.value
      }).subscribe( ( res : any[] ) => {
        if(res.length != 0) {
          this.RellenarDatos( res[0] );
        }
        else {
          this.Correcto = true;
        }
      },
      ( error ) => {
        console.log( error );
      });
    }
    else if(this.ReservaActualizarForm.controls.usuarioId.value != '') {
      this.http.post('http://127.0.0.1:3000/obtenerReservasPorUsuario', {
        rut: this.ReservaActualizarForm.controls.usuarioId.value
      }).subscribe( ( res : any[] ) => {
        if(res.length != 0) {
          this.RellenarDatos( res[0] );
        }
        else {
          this.Correcto = true;
        }
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
    this.ReservaActualizarForm.controls.fechaInicio.setValue(row.FECHA_INICIO.slice(0,10));
    this.ReservaActualizarForm.controls.fechaTermino.setValue(row.FECHA_TERMINO.slice(0,10));
    this.ReservaActualizarForm.controls.total.setValue(row.TOTAL);
    this.ReservaActualizarForm.controls.medioPago.setValue(row.MEDIO_PAGO);
    this.ReservaActualizarForm.controls.habitacionId.setValue(row.HABITACIONID);
    this.ReservaActualizarForm.controls.usuarioId.setValue(row.USUARIOID);
  }

  LimpiarCampos() {
    this.ReservaActualizarForm.controls.id.setValue('');
    this.ReservaActualizarForm.controls.fechaInicio.setValue('');
    this.ReservaActualizarForm.controls.fechaTermino.setValue('');
    this.ReservaActualizarForm.controls.total.setValue('');
    this.ReservaActualizarForm.controls.medioPago.setValue('');
    this.ReservaActualizarForm.controls.habitacionId.setValue('');
    this.ReservaActualizarForm.controls.usuarioId.setValue('');
  }
}
