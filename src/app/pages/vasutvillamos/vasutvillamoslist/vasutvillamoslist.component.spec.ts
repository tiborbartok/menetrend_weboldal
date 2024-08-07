import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasutvillamoslistComponent } from './vasutvillamoslist.component';

describe('VasutvillamoslistComponent', () => {
  let component: VasutvillamoslistComponent;
  let fixture: ComponentFixture<VasutvillamoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VasutvillamoslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VasutvillamoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
