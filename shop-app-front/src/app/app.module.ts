import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './components/products/products.component';
import {CategoryProductsComponent} from './components/category-products/category-products.component';
import {LoginComponent} from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InterceptorsService} from './services/interceptors.service';
import {DatePipe} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BasketComponent} from './components/basket/basket.component';
import {ToastrModule} from 'ngx-toastr';
import {CategoriesAddComponent} from './components/categories-add/categories-add.component';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {ProductsDetailsComponent} from './components/products-details/products-details.component';
import {MessageComponent} from './components/message/message.component';
import { ImageExpandComponent } from './components/image-expand/image-expand.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryProductsComponent,
    LoginComponent,
    NavbarComponent,
    BasketComponent,
    CategoriesAddComponent,
    ProductsDetailsComponent,
    MessageComponent,
    ImageExpandComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true
    }, DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [CategoriesAddComponent, ProductsDetailsComponent, MessageComponent, ImageExpandComponent]
})
export class AppModule {
}
