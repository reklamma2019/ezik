import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayvkaikonomPage } from './zayvkaikonom.page';

describe('ZayvkaikonomPage', () => {
  let component: ZayvkaikonomPage;
  let fixture: ComponentFixture<ZayvkaikonomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayvkaikonomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayvkaikonomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
