import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListProductDetailsComponent } from './components/shopping-list-product-details/shopping-list-product-details.component';

const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  { path: 'product/:id', component: ShoppingListProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
