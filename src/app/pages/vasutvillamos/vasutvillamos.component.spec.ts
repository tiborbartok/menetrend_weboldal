import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasutvillamosComponent } from './vasutvillamos.component';

describe('VasutvillamosComponent', () => {
  let component: VasutvillamosComponent;
  let fixture: ComponentFixture<VasutvillamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VasutvillamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VasutvillamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
