import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private usd;
  private weather;
  user = {
    username: null,
    rut: null,
    tipo: null
  };

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getTodayUsdRate()
    // this.getTodayWeather();
    this.user.username = localStorage.getItem('username');
    this.user.rut = localStorage.getItem('rut');
    this.user.tipo = localStorage.getItem('tipo');
  }

  getTodayUsdRate(){
    this.http.get("https://mindicador.cl/api/dolar").subscribe((res: Response) => {
      let data = res["serie"];
      this.usd = data[0]["valor"];
    });
  }

  CerrarSesion () {
    localStorage.removeItem('username');
    localStorage.removeItem('rut');
    localStorage.removeItem('tipo');
    location.href = 'Login';
  }
  //APIKEY = 494a8045cfbce532ebce3263c57bb520
  // getTodayWeather(){
  //   this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=494a8045cfbce532ebce3263c57bb520').subscribe((res : Response) => {
  //     console.log(res);
  //   });
  // }
}
