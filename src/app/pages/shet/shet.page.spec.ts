import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShetPage } from './shet.page';

describe('ShetPage', () => {
  let component: ShetPage;
  let fixture: ComponentFixture<ShetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
