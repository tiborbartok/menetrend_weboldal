import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuszRoutingModule } from './busz-routing.module';
import { BuszComponent } from './busz.component';
import { BuszListComponent } from './buszlist/buszlist.component';
import { BuszViewerComponent } from './buszviewer/buszviewer.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    BuszComponent,
    BuszListComponent,
    BuszViewerComponent
  ],
  imports: [
    CommonModule,
    BuszRoutingModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ]
})
export class BuszModule { }
