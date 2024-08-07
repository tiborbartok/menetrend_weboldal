import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Felhasznalo } from '../models/Felhasznalo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) { }

  create(user: Felhasznalo){
    return this.afs.collection<Felhasznalo>(this.collectionName).doc(user.id).set(user);
  }

  getAll (){

  }

  getById(id: string){
    return this.afs.collection<Felhasznalo>(this.collectionName).doc(id).valueChanges();
  }

  update(){

  }

  delete(){

  }
}
