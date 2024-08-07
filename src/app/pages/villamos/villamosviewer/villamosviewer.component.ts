import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-villamosviewer',
  templateUrl: './villamosviewer.component.html',
  styleUrls: ['./villamosviewer.component.scss']
})
export class VillamosviewerComponent {
  @Input() imageInput: any;
}
