import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaActualizarComponent } from './reserva-actualizar.component';

describe('ReservaActualizarComponent', () => {
  let component: ReservaActualizarComponent;
  let fixture: ComponentFixture<ReservaActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
