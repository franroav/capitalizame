import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasotresinversionComponent } from './pasotresinversion.component';

describe('PasotresinversionComponent', () => {
  let component: PasotresinversionComponent;
  let fixture: ComponentFixture<PasotresinversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasotresinversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasotresinversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
