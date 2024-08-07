import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trolibuszviewer',
  templateUrl: './trolibuszviewer.component.html',
  styleUrls: ['./trolibuszviewer.component.scss']
})
export class TrolibuszviewerComponent {
  @Input() imageInput: any;
}
