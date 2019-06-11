import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioActualizarComponent } from './usuario-actualizar.component';

describe('UsuarioActualizarComponent', () => {
  let component: UsuarioActualizarComponent;
  let fixture: ComponentFixture<UsuarioActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
