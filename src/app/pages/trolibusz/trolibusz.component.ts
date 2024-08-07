import { Component } from '@angular/core';
import { TrolibuszObject } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-trolibusz',
  templateUrl: './trolibusz.component.html',
  styleUrls: ['./trolibusz.component.scss']
})
export class TrolibuszComponent {
  trolibuszObject:Array<any> = TrolibuszObject;
  chosenTrolibusz:any;

  constructor(){
    this.chosenTrolibusz=this.trolibuszObject[0];
  }

  loadImage(imageObject: any){
    this.chosenTrolibusz = imageObject;
  }

  ngOnInit(): void{

  }
}
