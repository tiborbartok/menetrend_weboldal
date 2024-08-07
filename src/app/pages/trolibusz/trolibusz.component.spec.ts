import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolibuszComponent } from './trolibusz.component';

describe('TrolibuszComponent', () => {
  let component: TrolibuszComponent;
  let fixture: ComponentFixture<TrolibuszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrolibuszComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrolibuszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
