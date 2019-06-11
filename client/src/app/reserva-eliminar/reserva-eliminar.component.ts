import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reserva-eliminar',
  templateUrl: './reserva-eliminar.component.html',
  styleUrls: ['./reserva-eliminar.component.css']
})
export class ReservaEliminarComponent implements OnInit {

  Reservas = [];
  ReservaEliminarForm : FormGroup;

  constructor( private formBuilder : FormBuilder, private http : HttpClient ) { 
    this.ReservaEliminarForm = this.formBuilder.group({
      rut: ['']
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
          alert('Reserva eliminada exitosamente');
        else
          alert('Ocurrio un error inesperado, intentelo mas tarde');
          this.Reservas = [];
      },
      ( error ) => {
        console.log( error );
      });
    }
  }

  BuscarReserva ( ) {
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

}
