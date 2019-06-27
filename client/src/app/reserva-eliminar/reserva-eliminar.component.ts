import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserva-eliminar',
  templateUrl: './reserva-eliminar.component.html',
  styleUrls: ['./reserva-eliminar.component.css']
})
export class ReservaEliminarComponent implements OnInit {

  Reservas = [];
  ReservaEliminarForm : FormGroup;
  Correcto : boolean

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.Correcto = false;
    this.ReservaEliminarForm = this.formBuilder.group({
      rut: ['',[Validators.required, Validators.nullValidator, Validators.minLength(8)]]
    });
  }

  ngOnInit() {

  }



  EliminarReserva( id) {
    if(confirm ( '¿Esta seguro de eliminar la reserva?' )) {
      this.http.post('http://127.0.0.1:3000/actualizarEstadoReserva', {
        id: id,
        estado: 2
      }).subscribe( ( res : any ) => {
        if( res )
        {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'success',
            title: 'Reserva eliminada exitosamente'
          });
        }
        else
        {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'error',
            title: 'Ocurrio un error inesperado, intentelo mas tarde'
          });
          this.Reservas = [];
        }
      },
      ( error ) => {
        console.log( error );
      });
    }
    
  }

  BuscarReserva ( ) {
    if(!this.ReservaEliminarForm.invalid) {
      this.http.post('http://127.0.0.1:3000/obtenerReservasPorUsuario', { 
        rut: this.ReservaEliminarForm.controls.rut.value
      }).subscribe( ( res : any[] ) => {
        if( res ) 
          this.Reservas = res;
      },
      ( error ) => {
        console.log( error );
      });
    }
    else {
      this.Correcto = true;
    }
  }

  LimpiarCampos() {
    this.ReservaEliminarForm.controls.rut.setValue('');
    this.Correcto = false;
  }

}
