import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillamosRoutingModule } from './villamos-routing.module';
import { FormsModule } from '@angular/forms';
import { VillamosComponent } from './villamos.component';
import { VillamoslistComponent } from './villamoslist/villamoslist.component';
import { VillamosviewerComponent } from './villamosviewer/villamosviewer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    VillamosComponent,
    VillamoslistComponent,
    VillamosviewerComponent
  ],
  imports: [
    CommonModule,
    VillamosRoutingModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ]
})
export class VillamosModule { }
