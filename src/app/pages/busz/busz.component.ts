import { Component } from '@angular/core';
import { BuszObject } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-busz',
  templateUrl: './busz.component.html',
  styleUrls: ['./busz.component.scss']
})
export class BuszComponent {
  buszObject: Array<any> = BuszObject;
  chosenBusz: any;

  constructor(){

  }

  
  ngOnInit(): void{

  }

  loadImage(imageObject: any){
    this.chosenBusz = imageObject;
  }

}
