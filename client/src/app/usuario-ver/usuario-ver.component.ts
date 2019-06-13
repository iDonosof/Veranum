import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-ver',
  templateUrl: './usuario-ver.component.html',
  styleUrls: ['./usuario-ver.component.css']
})
export class UsuarioVerComponent implements OnInit {

  Usuarios = [];
  
  constructor( private http : HttpClient ) { }

  ngOnInit() {
    this.CargarUsuarios();
  }

  CargarUsuarios() {
    this.http.get('http://127.0.0.1:3000/obtenerUsuarios').subscribe( ( res : any[] ) => {
      this.Usuarios = res;
    },
    ( error ) => {
      console.log( error );
    });
  }
}
