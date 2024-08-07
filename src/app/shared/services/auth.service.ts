import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, jelszo: string){
    return this.auth.signInWithEmailAndPassword(email, jelszo);
  }

  signup(email: string, jelszo: string){
    return this.auth.createUserWithEmailAndPassword(email, jelszo);
  }

  isUserLoggedIn(){
    return this.auth.user;
  }

  logout(){
    return this.auth.signOut();
  }

}
