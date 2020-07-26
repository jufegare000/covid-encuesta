import { EncuestasListComponent } from './encuestas-list/encuestas-list.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'encuestas-list', component: EncuestasListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
