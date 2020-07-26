import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../model/Encuesta';
import { Router } from '@angular/router';
import { Model as BackBoneModel } from '../../backbone/backbone-min.js';
import { ENCUESTAS } from '../model/encuestas';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  encuesta: Encuesta = {
    ciudad: 'Medellin',
    estratoSocial: 2,
    ingresoPromedio: 4.3,
    labora: true,
    nivelEducacion: 'Ninguno',
    nombrePersona: 'yeison',
    sigueProtocolos: true,
    sufreEstres: true
  };

  nivelesDeEducacion: string[] = [
    'Ninguno', 'Básico Primaria', 'Bachillerato',
    'Tecnológico', 'Universitario', 'Maestria', 'Doctorado'];

  listaEstratos: number[] = [0, 1, 2, 3, 4, 5, 6];
  selectedNivel = 'Ninguno';
  selectedEstrato = '0';


  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  enviarForm() {
    console.log(this.encuesta.nivelEducacion);
    this.generarObjetoBackBone();
    this.router.navigateByUrl('/encuestas-list');
  }

  generarObjetoBackBone() {
    const objeto: any = BackBoneModel.extend();
    const nuevaEncuesta = new objeto({
      ciudad: this.encuesta.ciudad,
      estratoSocial: this.encuesta.ciudad,
      ingresoPromedio: this.encuesta.ingresoPromedio,
      labora: this.encuesta.labora,
      nivelEducacion: this.encuesta.nivelEducacion,
      nombrePersona: this.encuesta.nombrePersona,
      sigueProtocolos: this.encuesta.sigueProtocolos,
      sufreEstres: this.encuesta.sufreEstres
    });
    console.log(nuevaEncuesta.toJSON());
    ENCUESTAS.push(this.encuesta);
  }
}
