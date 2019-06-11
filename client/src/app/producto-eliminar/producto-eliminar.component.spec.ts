import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEliminarComponent } from './producto-eliminar.component';

describe('ProductoEliminarComponent', () => {
  let component: ProductoEliminarComponent;
  let fixture: ComponentFixture<ProductoEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
