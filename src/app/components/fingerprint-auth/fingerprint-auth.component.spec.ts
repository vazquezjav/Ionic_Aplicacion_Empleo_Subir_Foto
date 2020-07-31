import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FingerprintAuthComponent } from './fingerprint-auth.component';

describe('FingerprintAuthComponent', () => {
  let component: FingerprintAuthComponent;
  let fixture: ComponentFixture<FingerprintAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerprintAuthComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FingerprintAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
