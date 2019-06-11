import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionEliminarComponent } from './habitacion-eliminar.component';

describe('HabitacionEliminarComponent', () => {
  let component: HabitacionEliminarComponent;
  let fixture: ComponentFixture<HabitacionEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
