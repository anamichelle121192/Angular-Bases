import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman'
  public age:  number=45;
//propiedad
  get capitalizaName():string{
    return this.name.toUpperCase();
  }
//metodo
  getHeroeDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHeroe():void{
    this.name= 'Spiderman';
  }

  changeAge():void{
    this.age=25;
  }

  resetForm():void{
    this.name='iroman';
    this.age=45

    // document.querySelector('h1')!.innerHTML='Desde Angular'
    // document.querySelectorAll!('h1').forEach(element => {
    //   element.innerHTML = 'Desde Angular'
    // });

  }
}
