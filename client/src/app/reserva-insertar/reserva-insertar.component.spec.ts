import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaInsertarComponent } from './reserva-insertar.component';

describe('ReservaInsertarComponent', () => {
  let component: ReservaInsertarComponent;
  let fixture: ComponentFixture<ReservaInsertarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaInsertarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
