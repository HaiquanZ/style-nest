import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { AccountComponent } from './pages/account/account.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListProductComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path:'payment',
    component: PaymentComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
