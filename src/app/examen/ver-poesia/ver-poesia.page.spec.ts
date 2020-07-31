import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerPoesiaPage } from './ver-poesia.page';

describe('VerPoesiaPage', () => {
  let component: VerPoesiaPage;
  let fixture: ComponentFixture<VerPoesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPoesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerPoesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
