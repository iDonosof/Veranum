import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitacionActualizarComponent } from './habitacion-actualizar/habitacion-actualizar.component';
import { HabitacionEliminarComponent } from './habitacion-eliminar/habitacion-eliminar.component';
import { HabitacionInsertarComponent } from './habitacion-insertar/habitacion-insertar.component';
import { HabitacionVerComponent } from './habitacion-ver/habitacion-ver.component';
import { HabitacionListaComponent } from './habitacion-lista/habitacion-lista.component';
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
import { LoginComponent } from './login/login.component';
import  { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'HabitacionActualizar', component: HabitacionActualizarComponent },
  { path: 'HabitacionEliminar', component: HabitacionEliminarComponent },
  { path: 'HabitacionInsertar', component: HabitacionInsertarComponent },
  { path: 'HabitacionVer', component: HabitacionVerComponent },
  { path: 'HabitacionLista', component: HabitacionListaComponent },
  { path: 'ProductoActualizar', component: ProductoActualizarComponent },
  { path: 'ProductoEliminar', component: ProductoEliminarComponent },
  { path: 'ProductoInsertar', component: ProductoInsertarComponent },
  { path: 'ProductoVer', component: ProductoVerComponent },
  { path: 'ReservaActualizar', component: ReservaActualizarComponent },
  { path: 'ReservaEliminar', component: ReservaEliminarComponent },
  { path: 'ReservaInsertar', component: ReservaInsertarComponent },
  { path: 'ReservaVer', component: ReservaVerComponent },
  { path: 'UsuarioActualizar', component: UsuarioActualizarComponent },
  { path: 'UsuarioEliminar', component: UsuarioEliminarComponent },
  { path: 'UsuarioInsertar', component: UsuarioInsertarComponent },
  { path: 'UsuarioVer', component: UsuarioVerComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
