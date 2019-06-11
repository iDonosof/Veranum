import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionVerComponent } from './habitacion-ver.component';

describe('HabitacionVerComponent', () => {
  let component: HabitacionVerComponent;
  let fixture: ComponentFixture<HabitacionVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
