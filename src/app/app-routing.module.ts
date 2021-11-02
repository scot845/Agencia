import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservaComponent } from './reserva/reserva.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { GestionComponent } from './gestion/gestion.component';


const routes: Routes = [
  { path: 'reserva', component: ReservaComponent },
  { path: '', component: LoginComponent },
  { path: 'vuelos', component: VuelosComponent },
  {path: 'gestion', component: GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
