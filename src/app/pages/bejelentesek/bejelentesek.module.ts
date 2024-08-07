import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BejelentesekRoutingModule } from './bejelentesek-routing.module';
import { BejelentesekComponent } from './bejelentesek.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatumFormatumPipe } from 'src/app/shared/pipes/datum-formatum.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    BejelentesekComponent,
    DatumFormatumPipe
  ],
  imports: [
    CommonModule,
    BejelentesekRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class BejelentesekModule { }
