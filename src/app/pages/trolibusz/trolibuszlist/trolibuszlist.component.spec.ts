import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolibuszlistComponent } from './trolibuszlist.component';

describe('TrolibuszlistComponent', () => {
  let component: TrolibuszlistComponent;
  let fixture: ComponentFixture<TrolibuszlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrolibuszlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrolibuszlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
