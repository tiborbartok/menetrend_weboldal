import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VasutvillamosComponent } from './vasutvillamos.component';

const routes: Routes = [
  {path: '', component: VasutvillamosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VasutvillamosRoutingModule { }
