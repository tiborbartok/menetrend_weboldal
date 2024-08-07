import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trolibuszlist',
  templateUrl: './trolibuszlist.component.html',
  styleUrls: ['./trolibuszlist.component.scss']
})
export class TrolibuszlistComponent {
  @Input() trolibuszObjectInput: Array<any> = [];
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenTrolibusz: any;

  constructor(){

  }

  ngOnInit(): void {
    this.chosenTrolibusz=this.trolibuszObjectInput[0];
    this.reload();
  }

  reload(){
    this.imageObjectEmitter.emit(this.chosenTrolibusz);
  }
}
