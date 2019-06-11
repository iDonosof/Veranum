import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaEliminarComponent } from './reserva-eliminar.component';

describe('ReservaEliminarComponent', () => {
  let component: ReservaEliminarComponent;
  let fixture: ComponentFixture<ReservaEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
