import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webkert';
  page = '';

  routes: Array<string> = [];

  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService){
    
  }

  ngOnInit(){
    this.routes = this.router.config.map(conf => conf.path) as string[];
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((evts: any) =>{
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)){
        this.page=currentPage;
      }
    });
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }

  changePage(selectedPage: string){
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  logout(){
    this.authService.logout().then(() => {
      console.log('Sikeres kijelentkezés.');
    }).catch(error => {
      console.error(error);
    });
  }
}

