import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vasutvillamosviewer',
  templateUrl: './vasutvillamosviewer.component.html',
  styleUrls: ['./vasutvillamosviewer.component.scss']
})
export class VasutvillamosviewerComponent {
  @Input() imageInput: any;
}
