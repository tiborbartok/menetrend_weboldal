import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuszViewerComponent } from './buszviewer.component';

describe('BuszViewerComponent', () => {
  let component: BuszViewerComponent;
  let fixture: ComponentFixture<BuszViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuszViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuszViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
