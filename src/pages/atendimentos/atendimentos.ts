import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtendimentoService } from '../../services/domain/atendimento.service';
import { AtendimentoDTO } from '../../models/atendimentos.dto';
import { ListarPage } from '../listar/listar';

/**
 * Generated class for the AtendimentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atendimentos',
  templateUrl: 'atendimentos.html',
})
export class AtendimentosPage {

  items: AtendimentoDTO[];
  cpf: string;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public atendimentoService: AtendimentoService) {
      this.cpf = this.navParams.get('cpf');
  }

  ionViewDidLoad() {
  
    this.atendimentoService.findAll(this.cpf).subscribe(response => {
      this.items = response;
      
    },
      error => { });
  }

  listar(item: AtendimentoDTO){
    this.navCtrl.push(ListarPage,{item});
  }

}
