import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogledocscanvasComponent } from './googledocscanvas.component';

describe('GoogledocscanvasComponent', () => {
  let component: GoogledocscanvasComponent;
  let fixture: ComponentFixture<GoogledocscanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogledocscanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogledocscanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
