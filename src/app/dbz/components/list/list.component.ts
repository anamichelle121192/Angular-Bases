import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList : Character[]=[{
      name:'Trunk',
      power:10
    }]

    // public Index :number=0;

  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter();

    onDeleteCharacter(id?:string):void{
      if(!id)return;
      this.onDelete.emit(id)
        console.log(id);
    }


    // emitDelete():void{
    //   // debugger;

    //   this.onDelete.emit(this.Index)
    //   console.log(this.Index);
    //   return;
    // }
  }
