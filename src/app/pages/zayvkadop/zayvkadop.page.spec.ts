import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayvkadopPage } from './zayvkadop.page';

describe('ZayvkadopPage', () => {
  let component: ZayvkadopPage;
  let fixture: ComponentFixture<ZayvkadopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayvkadopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayvkadopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
