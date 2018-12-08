import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtendimentoDTO } from '../../models/atendimentos.dto';
import { AtendimentoService } from '../../services/domain/atendimento.service';
import { AtendimentosPage } from '../atendimentos/atendimentos';

/**
 * Generated class for the ListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {
  item: AtendimentoDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public atendimentoService: AtendimentoService) {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log(this.item);
  }
  finalizar(){
    this.atendimentoService.deletar(this.item.id).subscribe(response => {
      this.navCtrl.push(AtendimentosPage,{cpf: this.item.cpfDentista});

    },
      error => { });
  }

}
