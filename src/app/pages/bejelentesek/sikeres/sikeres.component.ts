import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sikeres',
  templateUrl: './sikeres.component.html',
  styleUrls: ['./sikeres.component.scss']
})
export class SikeresComponent implements OnInit{
  felhasznaloId: string = '';

  constructor(private actRoute: ActivatedRoute){

  }
  
  ngOnInit(): void{
    this.actRoute.params.subscribe((param: any) => {
        this.felhasznaloId = param.felhasznaloId as string;
    })
  }
}
