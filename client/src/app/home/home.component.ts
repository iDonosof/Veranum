import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private carousel = [
    '/assets/imgCarrusel/carrusel1.jpg', '/assets/imgCarrusel/carrusel2.jpg',
    '/assets/imgCarrusel/carrusel3.jpg', '/assets/imgCarrusel/carrusel4.jpg',
    '/assets/imgCarrusel/carrusel5.jpg'
  ];
  private rates = [];
  private data = [];
  private usd;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://mindicador.cl/api/dolar").subscribe((res: any[]) => {
      this.rates = res["serie"];
      
    });
    // this.getData();    
  }
  getData(){
    this.http.get("http://localhost:3000/")
    .subscribe((res:any[]) => {
      this.data = res[0];
    }, 
    (error) => {
      console.log(error);
    })
  }

}
