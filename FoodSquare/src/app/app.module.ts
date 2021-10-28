import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './public/menu/menu.component';
import { VerProductoComponent } from './public/ver-producto/ver-producto.component';
import { IniciarSesionComponent } from './public/iniciar-sesion/iniciar-sesion.component';
import { VerPedidosTiendaComponent } from './tienda/ver-pedidos-tienda/ver-pedidos-tienda.component';
import { MenuClienteComponent } from './cliente/menu-cliente/menu-cliente.component';
import { VerProductoClienteComponent } from './cliente/ver-producto-cliente/ver-producto-cliente.component';
import { VerCarritoClienteComponent } from './cliente/ver-carrito-cliente/ver-carrito-cliente.component';
import { VerComprasClienteComponent } from './cliente/ver-compras-cliente/ver-compras-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VerProductoComponent,
    IniciarSesionComponent,
    VerPedidosTiendaComponent,
    MenuClienteComponent,
    VerProductoClienteComponent,
    VerCarritoClienteComponent,
    VerComprasClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
