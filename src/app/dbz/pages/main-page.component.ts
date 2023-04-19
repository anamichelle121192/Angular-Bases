import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor(private dbzService : DbzService){}
//propiedad
  get character(): Character[]{
    return this.dbzService.characters;
  }
//metodo
  onDeleteCharacter(id:string):void{
    return this.dbzService.deleteCharacterbyID(id);
  }

  onNewCharacter(character:Character):void{
    return this.dbzService.addCharacter(character);
  }


}

