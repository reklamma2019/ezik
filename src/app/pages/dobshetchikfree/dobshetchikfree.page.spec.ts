import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobshetchikfreePage } from './dobshetchikfree.page';

describe('DobshetchikfreePage', () => {
  let component: DobshetchikfreePage;
  let fixture: ComponentFixture<DobshetchikfreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobshetchikfreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobshetchikfreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
