import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobshetchikonePage } from './dobshetchikone.page';

describe('DobshetchikonePage', () => {
  let component: DobshetchikonePage;
  let fixture: ComponentFixture<DobshetchikonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobshetchikonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobshetchikonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
