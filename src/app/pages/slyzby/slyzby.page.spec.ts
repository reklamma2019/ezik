import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlyzbyPage } from './slyzby.page';

describe('SlyzbyPage', () => {
  let component: SlyzbyPage;
  let fixture: ComponentFixture<SlyzbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlyzbyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlyzbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
