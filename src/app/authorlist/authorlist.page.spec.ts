import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthorlistPage } from './authorlist.page';

describe('AuthorlistPage', () => {
  let component: AuthorlistPage;
  let fixture: ComponentFixture<AuthorlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
