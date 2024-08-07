import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasutvillamosviewerComponent } from './vasutvillamosviewer.component';

describe('VasutvillamosviewerComponent', () => {
  let component: VasutvillamosviewerComponent;
  let fixture: ComponentFixture<VasutvillamosviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VasutvillamosviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VasutvillamosviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
