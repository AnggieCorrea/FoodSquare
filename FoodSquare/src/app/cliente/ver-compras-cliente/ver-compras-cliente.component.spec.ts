import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComprasClienteComponent } from './ver-compras-cliente.component';

describe('VerComprasClienteComponent', () => {
  let component: VerComprasClienteComponent;
  let fixture: ComponentFixture<VerComprasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerComprasClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerComprasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
