import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VasutvillamosRoutingModule } from './vasutvillamos-routing.module';
import { FormsModule } from '@angular/forms';
import { VasutvillamosComponent } from './vasutvillamos.component';
import { VasutvillamoslistComponent } from './vasutvillamoslist/vasutvillamoslist.component';
import { VasutvillamosviewerComponent } from './vasutvillamosviewer/vasutvillamosviewer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    VasutvillamosComponent,
    VasutvillamoslistComponent,
    VasutvillamosviewerComponent
  ],
  imports: [
    CommonModule,
    VasutvillamosRoutingModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ]
})
export class VasutvillamosModule { }
