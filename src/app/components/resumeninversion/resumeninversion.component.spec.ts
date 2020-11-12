import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeninversionComponent } from './resumeninversion.component';

describe('ResumeninversionComponent', () => {
  let component: ResumeninversionComponent;
  let fixture: ComponentFixture<ResumeninversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeninversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeninversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
