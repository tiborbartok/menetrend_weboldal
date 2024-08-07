import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuszComponent } from './busz.component';

describe('BuszComponent', () => {
  let component: BuszComponent;
  let fixture: ComponentFixture<BuszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuszComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
