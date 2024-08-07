import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrolibuszComponent } from './trolibusz.component';

const routes: Routes = [
  { path: '', component: TrolibuszComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrolibuszRoutingModule { }
