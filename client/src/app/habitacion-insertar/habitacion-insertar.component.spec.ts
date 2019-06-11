import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionInsertarComponent } from './habitacion-insertar.component';

describe('HabitacionInsertarComponent', () => {
  let component: HabitacionInsertarComponent;
  let fixture: ComponentFixture<HabitacionInsertarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionInsertarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
