import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { FormBuilder, NgControlStatus, FormGroup, Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reserva-insertar',
  templateUrl: './reserva-insertar.component.html',
  styleUrls: ['./reserva-insertar.component.css']
})
export class ReservaInsertarComponent implements OnInit {

  //Lista de habitaciones 
  Habitaciones = [];
  //Lista de precios del dia
  PreciosDia = [];
  ReservaForm : FormGroup;
  //Valor total de la reserva
  valorTotal = 0;
  //Valor del dolar
  usd = 1;
  //Valor total en pesos chilenos
  valorTotalCLP = 0;

  Correcto : boolean;

  constructor(private http: HttpClient, private formBuilder : FormBuilder) {
    this.Correcto = false;
    this.ReservaForm = this.formBuilder.group({
      fechaInicio: ['', [Validators.required, Validators.nullValidator]],
      fechaTermino: ['', [Validators.required, Validators.nullValidator]],
      medioPago: ['', [Validators.required, Validators.min(0), Validators.max(2)]],
      habitacion: ['', [Validators.required, Validators.min(0)]]
    });
  }
  
  ngOnInit() {
    //Obtiene todas las habitaciones para rellenar el select con el numero de cada habitacion
    this.http.get("http://localhost:3000/obtenerHabitaciones")
    .subscribe((res:any[]) => {
      this.Habitaciones = res;
      this.ReservaForm.controls.habitacion.setValue(this.Habitaciones[0].ID);
      this.HabitacionChanged(this.Habitaciones[0].ID);
    }, 
    (error) => {
      console.log(error);
    });
    //Obtiene el valor y la id de cada habitacion con fecha de hoy
    this.http.post("http://localhost:3000/obtenerPrecioDiaPorFecha",{
      'fecha': new Date().toISOString().slice(0,10)
    }).subscribe((res:any[]) => {
      this.PreciosDia = res;
    }, 
    (error) => {
      console.log(error);
    });

    //Obtiene el valor del dolar
    this.http.get("https://mindicador.cl/api/dolar").subscribe((res: Response) => {
      let data = res["serie"];
      this.usd = data[0]["valor"];
    });
  }

  //*Modificar El id del usuario por una variable de sesion con la id del usuario
  //*No funciona el post por alguna razon (averigualo)
  //Recurepa los datos del formulario de reserva y los guarda en la base de datos
  AgregarReserva () {
    if(!this.ReservaForm.invalid) {
      this.HabitacionChanged(this.ReservaForm.controls.habitacion.value);
      this.http.post("http://localhost:3000/crearReserva", {
        'fechaInicio': this.ReservaForm.controls.fechaInicio.value,
        'fechaTermino': this.ReservaForm.controls.fechaTermino.value,
        'total': this.valorTotal,
        'medioPago': this.ReservaForm.controls.medioPago.value,
        'habitacionId': +this.ReservaForm.controls.habitacion.value,
        'usuarioId': localStorage.getItem('rut')
      })
      .subscribe((res : any) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        Toast.fire({
          type: 'success',
          title: 'Se agrego la reserva exitosamente'
        });
      }, 
      (error) => {
        console.log(error);
      });
    }
    else {
      this.Correcto = true;
    }
  }

  HabitacionChanged(e) {
    let fechaInicio = this.ReservaForm.controls.fechaInicio.value;
    let fechaTermino = this.ReservaForm.controls.fechaTermino.value;
    let diasTranscurridos = this.CalcularDiasTranscurridos(fechaInicio, fechaTermino) + 1;
    let valorHabitacion = this.ObtenerPrecioDia(e);
    if(diasTranscurridos >= 1) {
      this.valorTotal = valorHabitacion * diasTranscurridos;
    }
    else
    {
      this.valorTotal = 0;
    }
    this.valorTotalCLP = Math.round(this.valorTotal * this.usd);
  }

  //Calcular la cantidad de dias entre dos fechas dadas por parametros
  //La fecha 2 tiene que ser mayor a la fecha 1
  //Si no es asi el resultado sera negativo
  CalcularDiasTranscurridos (fecha1, fecha2){
    try {
      let f1 = fecha1.split('-');
      let f2 = fecha2.split('-');
      let ffecha1 = Date.UTC(f1[0], f1[1] - 1, f1[2]);
      let ffecha2 = Date.UTC(f2[0], f2[1] - 1, f2[2]);
      let diff = ffecha2 - ffecha1;
      return Math.floor(diff / (1000 * 60 * 60 * 24)); 
    } catch (error) {
      return;
    }
  }

  //Obtiene el precio dia de una habitacion especificada por su id
  ObtenerPrecioDia (idHabitacion) {
    let valor;
    this.PreciosDia.forEach( p => {
      if(p.HABITACIONID == idHabitacion){
        valor = p.PRECIO;
      }
    });
    return valor;
  }
}
