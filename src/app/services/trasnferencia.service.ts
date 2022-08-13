import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TrasnferenciaService {
  private listaTransferencia: any[];
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  todasTransferenciasFromBack(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url); //Essa transferencia é a interface do model
  }

  get getTransferencias(): any[] {
    return this.listaTransferencia;
  }

  adicionarTransferencia(transferenciaFromOtherComponents: Transferencia) {
    this.hidratar(transferenciaFromOtherComponents);
    return this.httpClient.post<Transferencia>(
      this.url,
      transferenciaFromOtherComponents
    );
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
