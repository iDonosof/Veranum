import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVerComponent } from './reserva-ver.component';

describe('ReservaVerComponent', () => {
  let component: ReservaVerComponent;
  let fixture: ComponentFixture<ReservaVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
