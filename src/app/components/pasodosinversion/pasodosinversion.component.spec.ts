import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasodosinversionComponent } from './pasodosinversion.component';

describe('PasodosinversionComponent', () => {
  let component: PasodosinversionComponent;
  let fixture: ComponentFixture<PasodosinversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasodosinversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasodosinversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
