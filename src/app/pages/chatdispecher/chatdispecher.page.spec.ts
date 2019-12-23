import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdispecherPage } from './chatdispecher.page';

describe('ChatdispecherPage', () => {
  let component: ChatdispecherPage;
  let fixture: ComponentFixture<ChatdispecherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatdispecherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdispecherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
