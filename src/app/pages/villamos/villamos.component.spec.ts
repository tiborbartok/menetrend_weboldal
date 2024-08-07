import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillamosComponent } from './villamos.component';

describe('VillamosComponent', () => {
  let component: VillamosComponent;
  let fixture: ComponentFixture<VillamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
