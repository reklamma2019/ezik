import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyzayvkPage } from './myzayvk.page';

describe('MyzayvkPage', () => {
  let component: MyzayvkPage;
  let fixture: ComponentFixture<MyzayvkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyzayvkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyzayvkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
