import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HabitacionInsertarComponent } from './habitacion-insertar/habitacion-insertar.component';
import { HabitacionActualizarComponent } from './habitacion-actualizar/habitacion-actualizar.component';
import { HabitacionVerComponent } from './habitacion-ver/habitacion-ver.component';
import { HabitacionEliminarComponent } from './habitacion-eliminar/habitacion-eliminar.component';
import { ProductoActualizarComponent } from './producto-actualizar/producto-actualizar.component';
import { ProductoEliminarComponent } from './producto-eliminar/producto-eliminar.component';
import { ProductoInsertarComponent } from './producto-insertar/producto-insertar.component';
import { ProductoVerComponent } from './producto-ver/producto-ver.component';
import { ReservaActualizarComponent } from './reserva-actualizar/reserva-actualizar.component';
import { ReservaEliminarComponent } from './reserva-eliminar/reserva-eliminar.component';
import { ReservaInsertarComponent } from './reserva-insertar/reserva-insertar.component';
import { ReservaVerComponent } from './reserva-ver/reserva-ver.component';
import { UsuarioActualizarComponent } from './usuario-actualizar/usuario-actualizar.component';
import { UsuarioEliminarComponent } from './usuario-eliminar/usuario-eliminar.component';
import { UsuarioInsertarComponent } from './usuario-insertar/usuario-insertar.component';
import { UsuarioVerComponent } from './usuario-ver/usuario-ver.component';
import { HabitacionListaComponent } from './habitacion-lista/habitacion-lista.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HabitacionInsertarComponent,
    HabitacionActualizarComponent,
    HabitacionVerComponent,
    HabitacionEliminarComponent,
    ProductoActualizarComponent,
    ProductoEliminarComponent,
    ProductoInsertarComponent,
    ProductoVerComponent,
    ReservaActualizarComponent,
    ReservaEliminarComponent,
    ReservaInsertarComponent,
    ReservaVerComponent,
    UsuarioActualizarComponent,
    UsuarioEliminarComponent,
    UsuarioInsertarComponent,
    UsuarioVerComponent,
    HabitacionListaComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
