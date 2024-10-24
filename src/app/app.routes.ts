import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './componente/producto/producto.component';
import { ClienteComponent } from './componente/cliente/cliente.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Página Inicio'
    },
    {
        path:'producto',
        component:ProductoComponent,
        title:'Producto'
    },{
        path:'cliente',
        component:ClienteComponent,
        title:'Cliente'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
