import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobshetchiktwoPage } from './dobshetchiktwo.page';

describe('DobshetchiktwoPage', () => {
  let component: DobshetchiktwoPage;
  let fixture: ComponentFixture<DobshetchiktwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobshetchiktwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobshetchiktwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
