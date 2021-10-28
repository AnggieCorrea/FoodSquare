import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCarritoClienteComponent } from './ver-carrito-cliente.component';

describe('VerCarritoClienteComponent', () => {
  let component: VerCarritoClienteComponent;
  let fixture: ComponentFixture<VerCarritoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCarritoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCarritoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
