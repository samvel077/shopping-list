import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@pages/shopping-list/models/product.model';
import { ShoppingListService } from '@pages/shopping-list/services/shopping-list.service';
import { debounceTime, Subject, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shopping-list-product-details',
  templateUrl: './shopping-list-product-details.component.html',
  styleUrls: ['./shopping-list-product-details.component.scss'],
})
export class ShoppingListProductDetailsComponent implements OnDestroy {
  product: Product;
  productId: string | null;

  private _changeProductSubject$ = new Subject<Product>();
  private _unsubscriber$ = new Subject();

  constructor(
    private _route: ActivatedRoute,
    private _shoppingListService: ShoppingListService
  ) {
    this.productId = this._route.snapshot.paramMap.get('id');

    this._shoppingListService
      .getProduct(this.productId)
      .pipe(take(1))
      .subscribe({
        next: (product) => {
          this.product = product;
        },
      });

    this._changeProductSubject$
      .pipe(
        takeUntil(this._unsubscriber$),
        debounceTime(500),
        switchMap((product) => {
          return this._shoppingListService.changeProduct(product);
        })
      )
      .subscribe();
  }

  onCounterVlaueChange(count: number) {
    this._changeProductSubject$.next({ ...this.product, count: count || 0 });
  }

  ngOnDestroy(): void {
    this._unsubscriber$.next('');
    this._unsubscriber$.complete();
  }
}
