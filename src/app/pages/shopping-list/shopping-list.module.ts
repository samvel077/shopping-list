import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { SharedModule } from '@shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ShoppingListService } from './services/shopping-list.service';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListProductCardComponent } from './components/shopping-list-product-card/shopping-list-product-card.component';
import { ShoppingListProductDetailsComponent } from './components/shopping-list-product-details/shopping-list-product-details.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListProductCardComponent,
    ShoppingListProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShoppingListRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    SharedModule,
  ],
  providers: [ShoppingListService],
})
export class ShoppingListModule {}
