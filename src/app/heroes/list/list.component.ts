import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames : string []= ["Spiderman", "Iroman", "Hulk", "She Hulk", "Thor"]
  public deleteHeroe ?: string='';
  removeLastHeroe():void{
    this.deleteHeroe = this.heroeNames.pop();
    console.log(this.deleteHeroe)
  }
}
