import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoActualizarComponent } from './producto-actualizar.component';

describe('ProductoActualizarComponent', () => {
  let component: ProductoActualizarComponent;
  let fixture: ComponentFixture<ProductoActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
