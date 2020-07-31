import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicarPoesiaPage } from './publicar-poesia.page';

describe('PublicarPoesiaPage', () => {
  let component: PublicarPoesiaPage;
  let fixture: ComponentFixture<PublicarPoesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarPoesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarPoesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
