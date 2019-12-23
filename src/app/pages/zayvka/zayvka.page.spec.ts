import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayvkaPage } from './zayvka.page';

describe('ZayvkaPage', () => {
  let component: ZayvkaPage;
  let fixture: ComponentFixture<ZayvkaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayvkaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayvkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
