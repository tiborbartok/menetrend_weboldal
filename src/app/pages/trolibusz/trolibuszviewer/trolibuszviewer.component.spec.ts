import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrolibuszviewerComponent } from './trolibuszviewer.component';

describe('TrolibuszviewerComponent', () => {
  let component: TrolibuszviewerComponent;
  let fixture: ComponentFixture<TrolibuszviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrolibuszviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrolibuszviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
