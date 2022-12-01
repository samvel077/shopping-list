import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Product } from './models/product.model';
import { ShoppingListService } from './services/shopping-list.service';
import {
  Subject,
  takeUntil,
  take,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  page: number = 1;
  searchControl = new FormControl('');
  sortControl = new FormControl();
  searchValue: string | null = '';
  sortBy: { [key: string]: string | {} }[] = [
    {
      value: { key: 'price', order: 0 },
      viewValue: 'Price (ascending order)',
    },
    {
      value: { key: 'price', order: 1 },
      viewValue: 'Price (descending order)',
    },
    {
      value: { key: 'rating', order: 0 },
      viewValue: 'Rating (ascending order)',
    },
    {
      value: { key: 'rating', order: 1 },
      viewValue: 'Rating (descending order)',
    },
  ];

  private _unsubscriber$ = new Subject();

  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this._shoppingListService
      .getProducts(this.page)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.products = data;
        },
      });

    this.searchControl.valueChanges
      .pipe(
        takeUntil(this._unsubscriber$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe({
        next: (value) => {
          this.searchValue = value;
        },
      });
  }

  onScroll(): void {
    this._shoppingListService
      .getProducts(++this.page)
      .pipe(takeUntil(this._unsubscriber$))
      .subscribe({
        next: (data) => {
          this.products = [...this.products, ...data];
        },
      });
  }

  onReset() {
    this.searchControl.reset('');
    this.sortControl.reset('');
  }

  ngOnDestroy(): void {
    this._unsubscriber$.next('');
    this._unsubscriber$.complete();
  }
}
