import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { IsLogedInGuard } from '@core/guards/is-loged-in.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shopping-list',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
    canActivate: [IsLogedInGuard],
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./pages/shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'shopping-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
