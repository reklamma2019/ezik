import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceulugikonomPage } from './priceulugikonom.page';

describe('PriceulugikonomPage', () => {
  let component: PriceulugikonomPage;
  let fixture: ComponentFixture<PriceulugikonomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceulugikonomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceulugikonomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
