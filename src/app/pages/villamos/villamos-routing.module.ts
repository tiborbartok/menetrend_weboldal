import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillamosComponent } from './villamos.component';

const routes: Routes = [
  {path: '', component: VillamosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillamosRoutingModule { }
