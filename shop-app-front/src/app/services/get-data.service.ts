import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/category';
import {ShopCart} from '../models/shopCart';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  category = 'http://localhost:8080/category';
  products = 'http://localhost:8080/products';
  card = 'http://localhost:8080/cards';

  constructor(private httpClientModule: HttpClient) {

  }

  getAllCategory(): Observable<any> {
    return this.httpClientModule.get(this.category);
  }

  addCategory(category): Observable<any> {
    return this.httpClientModule.post(`http://localhost:8080/category`, category);
  }

  editCategory(category): Observable<any> {
    return this.httpClientModule.put(`${this.category}/` + `${category.id}`, category);
  }

  getAllProducts(): Observable<any> {
    return this.httpClientModule.get(`${this.products}`);
  }

  getProductsOfUSer(id: string): Observable<any> {
    return this.httpClientModule.get(this.card + `/prodOfUser/${id}`);
  }

  getAllProductsByCategoryId(id: string): Observable<any> {
    console.log(id)
    return this.httpClientModule.get(`${this.products}` + `/byCategory/${id}`);
  }

  findProductById(id: string): Observable<any> {
    return this.httpClientModule.get(`${this.products}` + `/byId/${id}`);
  }

  editProduct(product) {
    return this.httpClientModule.put(`${this.products}` + `/${product.id}`, product);
  }

  addProducts(product) {
    return this.httpClientModule.post(`${this.products}`, product);

  }

  deleteCategory(id: string): Observable<any> {
    return this.httpClientModule.delete(`${this.products}/${id}`);
  }

  addShopCart(object: ShopCart): Observable<any> {
    return this.httpClientModule.post(`${this.card}`, object);
  }

  editShopCart(object: ShopCart): Observable<any> {
    return this.httpClientModule.put(`${this.card}` + `/${object.id}`, object);
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpClientModule.delete(`${this.products}` + `/${id}`);
  }

}

