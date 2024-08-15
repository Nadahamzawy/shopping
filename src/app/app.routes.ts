import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'products', component: ProductsComponent, title: 'products' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: '**', component: NotfoundComponent, title: 'notfound' },
];
