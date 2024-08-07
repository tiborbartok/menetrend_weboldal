import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bejelentes } from '../models/Bejelentes';

@Injectable({
  providedIn: 'root'
})
export class BejelentesService {

  collectionName = 'Bejelentesek';

  constructor(private afs: AngularFirestore) { }

  create(bejelentes: Bejelentes){
    bejelentes.id = this.afs.createId();
    return this.afs.collection<Bejelentes>(this.collectionName).doc(bejelentes.id).set(bejelentes);
  }

  getAll(){
    return this.afs.collection<Bejelentes>(this.collectionName).valueChanges();
  }

  update(){
    
  }

  delete(){

  }

  getBejelentesek(){
    return this.afs.collection<Bejelentes>(this.collectionName, ref => ref.orderBy('datum', 'asc')).valueChanges();
  }
}
