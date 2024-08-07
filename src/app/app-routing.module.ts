import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) 
  },
  { path: 'busz',
    loadChildren: () => import('./pages/busz/busz.module').then(m => m.BuszModule),
    canActivate: [AuthGuard]
  },
  { path: 'trolibusz',
    loadChildren: () => import('./pages/trolibusz/trolibusz.module').then(m => m.TrolibuszModule),
    canActivate: [AuthGuard]
  },
  { path: 'villamos',
    loadChildren: () => import('./pages/villamos/villamos.module').then(m => m.VillamosModule),
    canActivate: [AuthGuard]
  },
  { path: 'vasutvillamos',
    loadChildren: () => import('./pages/vasutvillamos/vasutvillamos.module').then(m => m.VasutvillamosModule),
    canActivate: [AuthGuard]
  },
  { path: 'bejelentesek',
    loadChildren: () => import('./pages/bejelentesek/bejelentesek.module').then(m => m.BejelentesekModule),
    canActivate: [AuthGuard]
  },
  { path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  { path: 'bejelentkezes', 
    loadChildren: () => import('./pages/bejelentkezes/bejelentkezes.module').then(m => m.BejelentkezesModule) 
  },  
  { path: 'regisztracio', 
    loadChildren: () => import('./pages/regisztracio/regisztracio.module').then(m => m.RegisztracioModule) 
  },
  { path: '**',
    redirectTo: '/not-found'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
