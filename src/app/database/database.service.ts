import { Pessoa } from '../models/Pessoa';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  people: Pessoa[] = [];

  constructor() {}

  addPessoa(person: Pessoa): DatabaseService {
    this.people.push(person);
    return this;
  }

  getAllPeople(): Pessoa[] {
    return this.people;
  }

  getPessoaByName(name: string): Pessoa {
    return this.people.filter((todo) => todo.nome === name).pop();
  }
}
