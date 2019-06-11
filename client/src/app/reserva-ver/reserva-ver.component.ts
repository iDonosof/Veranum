import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reserva-ver',
  templateUrl: './reserva-ver.component.html',
  styleUrls: ['./reserva-ver.component.css']
})
export class ReservaVerComponent implements OnInit {

  Reservas = [];
  constructor( private http : HttpClient) { 

  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:3000/obtenerReservas').subscribe( ( res : any [] ) => {
      this.Reservas = res;
    }, 
    ( error ) => {
      console.log( error );
    });
  }

}
