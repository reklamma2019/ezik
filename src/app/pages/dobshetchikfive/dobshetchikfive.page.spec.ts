import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobshetchikfivePage } from './dobshetchikfive.page';

describe('DobshetchikfivePage', () => {
  let component: DobshetchikfivePage;
  let fixture: ComponentFixture<DobshetchikfivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobshetchikfivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobshetchikfivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
