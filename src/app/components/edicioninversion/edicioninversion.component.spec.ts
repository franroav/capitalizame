import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicioninversionComponent } from './edicioninversion.component';

describe('EdicioninversionComponent', () => {
  let component: EdicioninversionComponent;
  let fixture: ComponentFixture<EdicioninversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicioninversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicioninversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
