import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FakeLoadingService } from 'src/app/shared/services/fake-loading.service';

@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.scss']
})
export class BejelentkezesComponent {
  email = new FormControl('');
  jelszo = new FormControl('');

  constructor(private router: Router, private loadingService : FakeLoadingService, private authService: AuthService){

  }
  /*
  login(){
    this.loadingService.loadingWithPromise().then((data: number) => {
      if (data === 3){
        if (this.email.value === 'test@gmail.com' && this.jelszo.value === 'test'){
          this.router.navigateByUrl('/homepage');
        }
        else{
          console.error('Rossz e-mail cím vagy jelszó!');
        }
      }
    }).catch(error => {
      console.error(error);
    });
  }
  */

  async login(){
    if (this.email.value && this.jelszo.value){
      this.authService.login(this.email.value, this.jelszo.value).then(cred => {
        this.router.navigateByUrl('/homepage');
      }).catch(error => {
        console.error(error);
      });
    }
  }

}
