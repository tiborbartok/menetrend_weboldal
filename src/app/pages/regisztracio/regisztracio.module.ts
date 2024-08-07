import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisztracioRoutingModule } from './regisztracio-routing.module';
import { RegisztracioComponent } from './regisztracio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    RegisztracioComponent
  ],
  imports: [
    CommonModule,
    RegisztracioRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class RegisztracioModule { }
