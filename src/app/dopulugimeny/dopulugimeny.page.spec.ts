import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DopulugimenyPage } from './dopulugimeny.page';

describe('DopulugimenyPage', () => {
  let component: DopulugimenyPage;
  let fixture: ComponentFixture<DopulugimenyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DopulugimenyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DopulugimenyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
