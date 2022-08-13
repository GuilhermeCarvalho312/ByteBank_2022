import { TrasnferenciaService } from './../services/trasnferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private service: TrasnferenciaService) {}

  ngOnInit(): void {
    this.service.todasTransferenciasFromBack().subscribe((Response: Transferencia[]) => {
      console.table(Response);
      this.transferencias = Response;
    })
  }
}
