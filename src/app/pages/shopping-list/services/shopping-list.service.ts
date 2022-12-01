import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ShoppingListService {
  constructor(private _http: HttpClient) {}

  getProducts(page: number): Observable<Product[]> {
    return this._http.get<Product[]>(
      `${environment.BASE_URL}/products?_page=${page}&_limit=10`
    );
  }

  getProduct(id: string | null): Observable<Product> {
    return this._http.get<Product>(`${environment.BASE_URL}/products/${id}`);
  }

  changeProduct(product: Product) {
    return this._http.put(
      `${environment.BASE_URL}/products/${product.id}`,
      product
    );
  }
}
