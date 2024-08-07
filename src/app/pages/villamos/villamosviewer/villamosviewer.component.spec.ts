import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillamosviewerComponent } from './villamosviewer.component';

describe('VillamosviewerComponent', () => {
  let component: VillamosviewerComponent;
  let fixture: ComponentFixture<VillamosviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillamosviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillamosviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
