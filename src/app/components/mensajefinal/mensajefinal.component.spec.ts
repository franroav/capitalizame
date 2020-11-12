import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajefinalComponent } from './mensajefinal.component';

describe('MensajefinalComponent', () => {
  let component: MensajefinalComponent;
  let fixture: ComponentFixture<MensajefinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajefinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
