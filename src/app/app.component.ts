import { Component } from '@angular/core';
import { TrasnferenciaService } from './services/trasnferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'bytebank';

  constructor(private service: TrasnferenciaService) {}
}
