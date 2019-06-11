import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionListaComponent } from './habitacion-lista.component';

describe('HabitacionListaComponent', () => {
  let component: HabitacionListaComponent;
  let fixture: ComponentFixture<HabitacionListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
