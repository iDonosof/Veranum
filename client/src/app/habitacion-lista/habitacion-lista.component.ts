import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habitacion-lista',
  templateUrl: './habitacion-lista.component.html',
  styleUrls: ['./habitacion-lista.component.css']
})
export class HabitacionListaComponent implements OnInit {

  Habitaciones = [];
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    //this.Habitaciones = this.data.ObtenerHabitaciones();
    this.http.get("http://localhost:3000/obtenerHabitaciones")
    .subscribe((res:any[]) => {
      this.Habitaciones = res;
    }, 
    (error) => {
      console.log(error);
    })
  }
}
