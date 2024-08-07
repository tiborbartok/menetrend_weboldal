import { Component } from '@angular/core';
import { VasutvillamosObject } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-vasutvillamos',
  templateUrl: './vasutvillamos.component.html',
  styleUrls: ['./vasutvillamos.component.scss']
})
export class VasutvillamosComponent {
  vasutvillamosObject:Array<any> = VasutvillamosObject;
  chosenVasutvillamos:any;

  constructor(){
    this.chosenVasutvillamos=this.vasutvillamosObject[0];
  }

  loadImage(imageObject: any){
    this.chosenVasutvillamos = imageObject;
  }

  ngOnInit(): void{

  }
}
