import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent implements OnInit {

  constructor(private databaseService: DatabaseService) {}

  registroDePessoa = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),
    foto: new FormControl(''),
  });

  onSubmit() {
    if (!this.registroDePessoa.invalid){
      if (!this.databaseService.getPessoaByName(this.registroDePessoa.value.nome)){
        if (!this.registroDePessoa.value.foto){
          this.registroDePessoa.value.foto = 'https://pbs.twimg.com/profile_images/1185564118/bart2.JPG';
        }
        this.databaseService.addPessoa(this.registroDePessoa.value);
        this.registroDePessoa.reset();
        alert('Pessoa cadastrada com sucesso!');
      } else {
        alert('Já existe uma pessoa com esse nome');
      }
    } else {
      alert('Nome e Idade são necessários!');
    }
  }

  ngOnInit(): void {
  }

}
