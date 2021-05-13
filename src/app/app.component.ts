import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exercicio 06/05 - TC2';
  show2 = true;

  hiddenOrShow(){
    this.show2 = !this.show2;
  }
  
}
