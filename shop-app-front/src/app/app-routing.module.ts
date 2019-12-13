import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {CategoryProductsComponent} from './components/category-products/category-products.component';
import {ProductsComponent} from './components/products/products.component';
import {BasketComponent} from './components/basket/basket.component';


const routes: Routes =
  [{path: 'login', component: LoginComponent},
    {path: 'categories', component: CategoryProductsComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'basket', component: BasketComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
