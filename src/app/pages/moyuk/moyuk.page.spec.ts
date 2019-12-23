import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyukPage } from './moyuk.page';

describe('MoyukPage', () => {
  let component: MoyukPage;
  let fixture: ComponentFixture<MoyukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoyukPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
