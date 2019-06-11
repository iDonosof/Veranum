import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEliminarComponent } from './usuario-eliminar.component';

describe('UsuarioEliminarComponent', () => {
  let component: UsuarioEliminarComponent;
  let fixture: ComponentFixture<UsuarioEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
