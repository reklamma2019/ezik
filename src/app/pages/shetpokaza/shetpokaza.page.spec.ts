import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShetpokazaPage } from './shetpokaza.page';

describe('ShetpokazaPage', () => {
  let component: ShetpokazaPage;
  let fixture: ComponentFixture<ShetpokazaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShetpokazaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShetpokazaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
