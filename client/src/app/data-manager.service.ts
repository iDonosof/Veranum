import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  valorDolar : number;
  
  Hoteles = [
    { id: 1, 
      direccion: 'Tu madre', 
      region: 'Tu re puta madre', 
      telefono: 123123123, 
      administrador: null
    }
  ];

  Habitaciones = [
    {
      id: 1,
      numero: 10,
      camas: 1,
      capacidad: 2,
      banos: 1,
      hotelId: 1
    },
    {
      id: 2,
      numero: 20,
      camas: 2,
      capacidad: 2,
      banos: 1,
      hotelId: 1
    },
    {
      id: 3,
      numero: 30,
      camas: 2,
      capacidad: 2,
      banos: 1,
      hotelId: 1
    }
  ];

  PrecioDia = [
    {
      id: 1,
      fecha: '14/5/2019',
      precio: 10000,
      habitacionId: 1
    },
    {
      id: 2,
      fecha: '14/5/2019',
      precio: 5000,
      habitacionId: 2
    },
    {
      id: 3,
      fecha: '14/5/2019',
      precio: 6000,
      habitacionId: 3
    }
  ];

  Reservas = [];

  //Habitacion
  IngresarHabitacion (Habitacion){
    let max = 0;
    this.Habitaciones.forEach( e => {
      if(e.id > max) {
        max = e.id;
      }
    });
    Habitacion.id = max + 1;
    this.Habitaciones.push(Habitacion);
  }

  ObtenerHabitaciones () {
    return this.Habitaciones;
  }

  //Reserva
  IngresarReserva (Reserva){
    let max = 0;
    this.Reservas.forEach( e => {
      if(e.id > max) {
        max = e.id;
      }
    });
    Reserva.id = max == undefined || max == null ? 0 : max + 1;
    this.Reservas.push(Reserva);
  };

  ObtenerReservas () {
    return this.Reservas;
  }

  ObtenerPrecioDia (idHabitacion) {
    let valor;
    this.PrecioDia.forEach( p => {
      if(p.habitacionId == idHabitacion){
        valor = p.precio;
      }
    });
    return valor;
  }
}