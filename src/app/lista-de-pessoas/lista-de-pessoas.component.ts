import { DatabaseService } from '../database/database.service';
import { Pessoa } from '../models/Pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-pessoas',
  templateUrl: './lista-de-pessoas.component.html',
  styleUrls: ['./lista-de-pessoas.component.scss']
})
export class ListaDePessoasComponent implements OnInit {

  constructor(private databaseService: DatabaseService) {}

  pessoa: Pessoa[] = [];
  selectedPessoa: Pessoa;

  getAllPeople(): void {
    this.pessoa = this.databaseService.getAllPeople();
  }

  getPessoaByName(name: string): void {
    this.selectedPessoa = this.databaseService.getPessoaByName(name);
  }

  clearPessoa() {
    this.selectedPessoa = null;
  }

  ngOnInit(): void {
    this.getAllPeople();
  }

}
