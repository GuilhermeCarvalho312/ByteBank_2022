import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrasnferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get getTransferencias(): any[] {
    return this.listaTransferencia;
  }

  adicionarTransferencia(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
