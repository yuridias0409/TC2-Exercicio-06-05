import { Pessoa } from '../models/Pessoa';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mostrar-pessoa',
  templateUrl: './mostrar-pessoa.component.html',
  styleUrls: ['./mostrar-pessoa.component.scss']
})
export class MostrarPessoaComponent {
  @Input() pessoa: Pessoa;

  @Input() show: boolean;

  @Output() clearPessoa = new EventEmitter<string>();

  fecharCard(): void {
    this.show = false;
    this.clearPessoa.emit(null);
  }
}
