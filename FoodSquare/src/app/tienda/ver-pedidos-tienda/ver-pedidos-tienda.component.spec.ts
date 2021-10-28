import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPedidosTiendaComponent } from './ver-pedidos-tienda.component';

describe('VerPedidosTiendaComponent', () => {
  let component: VerPedidosTiendaComponent;
  let fixture: ComponentFixture<VerPedidosTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPedidosTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPedidosTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
