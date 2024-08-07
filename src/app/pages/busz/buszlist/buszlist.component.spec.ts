import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuszListComponent } from './buszlist.component';

describe('BuszListComponent', () => {
  let component: BuszListComponent;
  let fixture: ComponentFixture<BuszListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuszListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuszListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
