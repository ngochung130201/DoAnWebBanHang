import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { PromoComponent } from './pages/promo/promo.component';

const routes: Routes = [
  {

    path: '', component: HomeComponent
  },
  {

    path: 'dang-nhap', component: LoginComponent
  },
  {

    path: 'gio-hang', component: CartComponent
  },
  {

    path: 'khuyen-mai', component: PromoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
