import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrolibuszRoutingModule } from './trolibusz-routing.module';
import { FormsModule } from '@angular/forms';
import { TrolibuszComponent } from './trolibusz.component';
import { TrolibuszlistComponent } from './trolibuszlist/trolibuszlist.component';
import { TrolibuszviewerComponent } from './trolibuszviewer/trolibuszviewer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    TrolibuszComponent,
    TrolibuszlistComponent,
    TrolibuszviewerComponent
  ],
  imports: [
    CommonModule,
    TrolibuszRoutingModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ]
})
export class TrolibuszModule { }
