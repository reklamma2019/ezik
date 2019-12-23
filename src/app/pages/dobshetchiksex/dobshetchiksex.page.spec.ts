import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobshetchiksexPage } from './dobshetchiksex.page';

describe('DobshetchiksexPage', () => {
  let component: DobshetchiksexPage;
  let fixture: ComponentFixture<DobshetchiksexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobshetchiksexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobshetchiksexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
