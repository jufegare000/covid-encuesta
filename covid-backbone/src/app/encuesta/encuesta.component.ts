import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../model/Encuesta';


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  encuesta: Encuesta = {
    ciudad: 'Medellin',
    estratoSocial: '2',
    ingresoPromedio: 4.3,
    labora: false,
    nivelEducacion: 'primaria',
    nombrePersona: 'yeison',
    sigueProtocolos: true,
    sufreEstres: true
  }

  constructor() { }


  ngOnInit(): void {

  }

}
