import { Component, Input } from '@angular/core';

import { Product } from '@pages/shopping-list/models/product.model';

@Component({
  selector: 'app-shopping-list-product-card',
  templateUrl: './shopping-list-product-card.component.html',
  styleUrls: ['./shopping-list-product-card.component.scss'],
})
export class ShoppingListProductCardComponent {
  @Input() product: Product;
}
