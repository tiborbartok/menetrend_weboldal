import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Felhasznalo } from 'src/app/shared/models/Felhasznalo';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.scss']
})
export class RegisztracioComponent {
  regisztraciosUrlap = new FormGroup({
    email: new FormControl(''),
    jelszo: new FormControl(''),
    nev: new FormGroup({
      vezeteknev: new FormControl(''),
      keresztnev: new FormControl('')
    })
  });

  onSubmit(){
      this.authService.signup(this.regisztraciosUrlap.get('email')?.value!, this.regisztraciosUrlap.get('jelszo')?.value!).then(cred => {
        const user: Felhasznalo ={
          id: cred.user?.uid as string,
          email: this.regisztraciosUrlap.get('email')?.value!,
          username: this.regisztraciosUrlap.get('email')?.value!.split('@')[0]!,
          nev: {
            vezeteknev: this.regisztraciosUrlap.get('nev.vezeteknev')?.value!,
            keresztnev: this.regisztraciosUrlap.get('nev.keresztnev')?.value!
          }
        };
        this.userService.create(user).then(_ => {
          console.log('Sikeres regisztráció.');
        }).catch(error => {
          console.error(error);
        })
      }).catch(error => {
        console.error(error);
      });

  }

  constructor(private authService: AuthService, private userService: UserService){

  }

}
