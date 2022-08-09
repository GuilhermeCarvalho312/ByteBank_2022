import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  public valor: number;
  public destino: number;

  transferir() {
    console.log(
      `Solicitada nova transferência com valor: ${this.valor} e destino: ${this.destino}`
    );
  }
}
