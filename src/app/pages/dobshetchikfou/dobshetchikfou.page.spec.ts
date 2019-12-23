import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobshetchikfouPage } from './dobshetchikfou.page';

describe('DobshetchikfouPage', () => {
  let component: DobshetchikfouPage;
  let fixture: ComponentFixture<DobshetchikfouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobshetchikfouPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobshetchikfouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
