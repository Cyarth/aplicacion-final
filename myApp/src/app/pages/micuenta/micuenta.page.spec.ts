import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MicuentaPage } from './micuenta.page';

describe('MicuentaPage', () => {
  let component: MicuentaPage;
  let fixture: ComponentFixture<MicuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MicuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
