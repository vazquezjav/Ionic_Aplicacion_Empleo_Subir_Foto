import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionarPage } from './seleccionar.page';

describe('SeleccionarPage', () => {
  let component: SeleccionarPage;
  let fixture: ComponentFixture<SeleccionarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
