import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasounoinversionComponent } from './pasounoinversion.component';

describe('PasounoinversionComponent', () => {
  let component: PasounoinversionComponent;
  let fixture: ComponentFixture<PasounoinversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasounoinversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasounoinversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
