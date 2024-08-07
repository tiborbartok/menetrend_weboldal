import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-villamoslist',
  templateUrl: './villamoslist.component.html',
  styleUrls: ['./villamoslist.component.scss']
})
export class VillamoslistComponent {
  @Input() villamosObjectInput: Array<any> = [];
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenVillamos: any;

  constructor(){

  }

  ngOnInit(): void {
    this.chosenVillamos=this.villamosObjectInput[0];
    this.reload();
  }

  reload(){
    this.imageObjectEmitter.emit(this.chosenVillamos);
  }
}
