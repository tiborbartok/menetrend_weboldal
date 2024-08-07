import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vasutvillamoslist',
  templateUrl: './vasutvillamoslist.component.html',
  styleUrls: ['./vasutvillamoslist.component.scss']
})
export class VasutvillamoslistComponent {
  @Input() vasutvillamosObjectInput: Array<any> = [];
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenVasutvillamos: any;

  constructor(){

  }

  ngOnInit(): void {
    this.chosenVasutvillamos=this.vasutvillamosObjectInput[0];
    this.reload();
  }

  reload(){
    this.imageObjectEmitter.emit(this.chosenVasutvillamos);
  }
}
