import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokazaniePage } from './pokazanie.page';

describe('PokazaniePage', () => {
  let component: PokazaniePage;
  let fixture: ComponentFixture<PokazaniePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokazaniePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokazaniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
