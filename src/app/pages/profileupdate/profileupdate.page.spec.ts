import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileupdatePage } from './profileupdate.page';

describe('ProfileupdatePage', () => {
  let component: ProfileupdatePage;
  let fixture: ComponentFixture<ProfileupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
