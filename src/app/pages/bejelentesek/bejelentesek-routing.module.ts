import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BejelentesekComponent } from './bejelentesek.component';

const routes: Routes = [
  { path: '', component: BejelentesekComponent },
  { path: 'sikeres', loadChildren: () => import('./sikeres/sikeres.module').then(m => m.SikeresModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BejelentesekRoutingModule { }
