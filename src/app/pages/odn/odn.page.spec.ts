import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdnPage } from './odn.page';

describe('OdnPage', () => {
  let component: OdnPage;
  let fixture: ComponentFixture<OdnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
