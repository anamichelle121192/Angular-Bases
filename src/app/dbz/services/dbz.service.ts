import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'
import { Character } from '../interfaces/character.interface';
console.log('uuid')
console.log(uuid())

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },{
      id:uuid(),
      name:'Goku',
      power:9500
    },{
      id:uuid(),
      name:'Vegeta',
      power:7500
    }
  ];

  addCharacter(character:Character): void{

    // const onNewCharacter :Character = {
    //   id:uuid(),
    //   name:character.name,
    //   power:character.power
    // }

    // pero en caso de que tenga muchos elemntos se puede hacer asi

    const onNewCharacter :Character ={...character,id: uuid()}

    // El operador spread ... me trae todas las propiedades y esparcelas en este nuevo obj que estoy creando

    // debugger;
    this.characters.push(onNewCharacter);
    console.log('MainPage');
    console.log(character);
    return;
  }

  // onDeleteCharacter(index:number):void{
  //   console.log(this.characters)
  //   this.characters.splice(index,1);
  //   console.log(this.characters)
  // }

  deleteCharacterbyID(id:string){
    this.characters = this.characters.filter(character=> character.id !== id)
  }

}
