import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillamoslistComponent } from './villamoslist.component';

describe('VillamoslistComponent', () => {
  let component: VillamoslistComponent;
  let fixture: ComponentFixture<VillamoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillamoslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillamoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
