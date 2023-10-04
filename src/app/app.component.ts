  import { Component } from '@angular/core';
  import {Jogador} from './shared/model/jogador';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'Pelada+';
    jogador: Jogador;
    jogadores: Array<Jogador>;
    niveis: Array<number> = [1, 2, 3, 4, 5]
    posicoes: Array<string> = ["Atacante", "Meia", "Defensor", "Goleiro"];
    editMode: boolean = false;
    jogadorEmEdicao: Jogador = new Jogador(0, '', 0, '')


    constructor() {
      this.jogadores = new Array<Jogador>();
      this.jogador = new Jogador((this.jogadores.length + 1), '', 0, '');
    }

    cadastrar(): void {
      this.jogadores.push(this.jogador);
      console.log(this.jogador)
      this.jogador = new Jogador(0, '', 0, '');
    }

    remover(jogadorARemover: Jogador): void {
      const idxARemover = this.jogadores.findIndex(jogador => jogador.nome === jogadorARemover.nome)

      if (idxARemover >= 0) {
        this.jogadores.splice(idxARemover, 1)
      }

    }

    editar(jogador: Jogador) {
      this.editMode = true;
      this.jogadorEmEdicao = {...jogador};
    }

    salvarEdicao(): void {
      const index = this.jogadores.findIndex(j => j.id === this.jogadorEmEdicao.id);
      if (index !== -1) {
        this.jogadores[index] = {...this.jogadorEmEdicao};
      }

      this.editMode = false;
      this.jogadorEmEdicao = new Jogador(0, "", 0, "");
    }

    cancelarEdicao(): void {

      this.editMode = false;
      this.jogadorEmEdicao = new Jogador(0, "", 0, "");
    }

    getImageUrl(posicao: string): string {
      const stringP = posicao.toString()
      switch (stringP.toLowerCase()) {
        case "goleiro":
          return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8i8Zssi3FFZZfH23GyINeU_KrlSCces9Azg&usqp=CAU"
        default:
          return "https://www.declatra.adv.br/wp-content/uploads/2022/11/direitos-trabalhistas-do-jogador-de-futebol.jpg"

      }
    }
  }
