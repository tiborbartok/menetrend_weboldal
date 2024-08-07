import { Component } from '@angular/core';
import { VillamosObject } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-villamos',
  templateUrl: './villamos.component.html',
  styleUrls: ['./villamos.component.scss']
})
export class VillamosComponent {
  villamosObject:Array<any> = VillamosObject;
  chosenVillamos:any;

  constructor(){
    this.chosenVillamos=this.villamosObject[0];
  }

  loadImage(imageObject: any){
    this.chosenVillamos = imageObject;
  }

  ngOnInit(): void{

  }
}
