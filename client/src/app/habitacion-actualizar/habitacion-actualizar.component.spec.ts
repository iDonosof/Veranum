import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionActualizarComponent } from './habitacion-actualizar.component';

describe('HabitacionActualizarComponent', () => {
  let component: HabitacionActualizarComponent;
  let fixture: ComponentFixture<HabitacionActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
