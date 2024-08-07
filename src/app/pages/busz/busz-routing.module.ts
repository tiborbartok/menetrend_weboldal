import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuszComponent } from './busz.component';

const routes: Routes = [
  { path: '', component: BuszComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuszRoutingModule { }
