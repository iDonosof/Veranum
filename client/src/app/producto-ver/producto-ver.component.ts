import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-producto-ver',
  templateUrl: './producto-ver.component.html',
  styleUrls: ['./producto-ver.component.css']
})
export class ProductoVerComponent implements OnInit {

  Productos = [];
  constructor( private http : HttpClient ) { 
    
  }

  ngOnInit() {
    this.CargarProductos();
  }

  CargarProductos() {
    this.http.get('http://127.0.0.1:3000/obtenerProductos').subscribe( ( res : any[] ) => {
      this.Productos = res;
    },
    ( error ) => {
      console.log( error );
    });
  }

}
