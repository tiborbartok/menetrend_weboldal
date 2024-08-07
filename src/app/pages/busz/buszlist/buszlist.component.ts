import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buszlist',
  templateUrl: './buszlist.component.html',
  styleUrls: ['./buszlist.component.scss']
})
export class BuszListComponent {
  @Input() buszObjectInput: Array<any> = [];
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenBusz: any;

  constructor(){

  }

  ngOnInit(): void {
    this.chosenBusz=this.buszObjectInput[0];
    this.reload();
  }

  reload(){
    this.imageObjectEmitter.emit(this.chosenBusz);
  }
}
