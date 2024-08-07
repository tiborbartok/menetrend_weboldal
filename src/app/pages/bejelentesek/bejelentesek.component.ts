import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bejelentes } from 'src/app/shared/models/Bejelentes';
import { Felhasznalo } from 'src/app/shared/models/Felhasznalo';
import { BejelentesService } from 'src/app/shared/services/bejelentes.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-bejelentesek',
  templateUrl: './bejelentesek.component.html',
  styleUrls: ['./bejelentesek.component.scss']
})
export class BejelentesekComponent{

  user?: Felhasznalo;

  bejelentesek:Array<any> = [];

  bejelentesUrlap = this.createForm({
    id: '',
    felhasznalonev: '',
    bejelentes: '',
    datum: 0,
  });

  constructor(private fb: FormBuilder, private router: Router, private bejelentesService: BejelentesService, private userService: UserService){

  }

  createForm(model: Bejelentes){
    let formGroup = this.fb.group(model);
    formGroup.get("felhasznalonev")?.addValidators([Validators.required]);
    formGroup.get("bejelentes")?.addValidators([Validators.required]);
    return formGroup;
  }

  addBejelentes(){
    if (this.bejelentesUrlap.valid){
      if (this.bejelentesUrlap.get('felhasznalonev') && this.bejelentesUrlap.get('bejelentes')){
        this.bejelentesUrlap.get('datum')?.setValue(new Date().getTime());
        this.bejelentesService.create(this.bejelentesUrlap.value as Bejelentes).then(_ => {
          this.router.navigateByUrl('/bejelentesek/sikeres/' + this.bejelentesUrlap.get('felhasznalonev')?.value);
        }).catch(error => {
          console.error(error);
        });
    }
    }
  }

  ngOnChanges(): void {
    this.bejelentesService.getBejelentesek().subscribe(bejelentesek => {
      this.bejelentesek = bejelentesek;
      this.bejelentesUrlap.get('felhasznalonev')?.setValue(this.user?.username!);
    }, error => {
      console.error(error);
    });
  }

  ngOnInit(): void{
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
    });
  }
}
