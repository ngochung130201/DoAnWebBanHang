import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';
import { PromoComponent } from './pages/promo/promo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,


  }, {
    path: "san-pham",
    component: ProductComponent,

  },
  {
    path: 'san-pham/:id', component: ProductDetailComponent
  },
  {
    path: 'dang-nhap', component: LoginComponent
  },
  {
    path: 'gio-hang', component: CartComponent
  },
  {
    path: 'khuyen-mai', component: PromoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
