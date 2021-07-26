import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '',component:  AboutComponent},
    {path: 'sobre-nosotros', component: AboutComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'crear-producto', component: CreateComponent},
    {path: 'carrito', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
// en el curso por defecto estaba asi export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//se tuvo que poner el <any> para corregirlo
