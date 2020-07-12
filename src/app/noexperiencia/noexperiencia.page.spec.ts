import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoexperienciaPage } from './noexperiencia.page';

describe('NoexperienciaPage', () => {
  let component: NoexperienciaPage;
  let fixture: ComponentFixture<NoexperienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoexperienciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoexperienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
