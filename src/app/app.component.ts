import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'bytebank';
  public transferencia: any;

  transferir(evento) {
    console.log(evento);
    this.transferencia = evento;
  }
}
