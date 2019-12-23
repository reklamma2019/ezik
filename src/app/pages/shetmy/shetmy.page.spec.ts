import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShetmyPage } from './shetmy.page';

describe('ShetmyPage', () => {
  let component: ShetmyPage;
  let fixture: ComponentFixture<ShetmyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShetmyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShetmyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
