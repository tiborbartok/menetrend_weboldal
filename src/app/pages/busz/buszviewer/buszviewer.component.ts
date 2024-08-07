import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buszviewer',
  templateUrl: './buszviewer.component.html',
  styleUrls: ['./buszviewer.component.scss']
})
export class BuszViewerComponent {

  @Input() imageInput: any;

}
