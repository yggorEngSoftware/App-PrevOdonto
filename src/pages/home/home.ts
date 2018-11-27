import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciaisdto';
import { AtendimentosPage } from '../atendimentos/atendimentos';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds = new CredenciaisDTO();
  
  constructor(public navCtrl: NavController) {
  }
  

  login() {
    console.log(this.creds);
    this.navCtrl.push(AtendimentosPage, {cpf: this.creds.cpf});
  }
  

  }


