import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntdModule } from './component/antd/antd.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClothingItemComponent } from './component/clothing-item/clothing-item.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './component/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { LoginComponent } from './component/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserManagerComponent } from './pages/admin/user-manager/user-manager.component';
import { ProductManagerComponent } from './pages/admin/product-manager/product-manager.component';
import { StatisticalComponent } from './pages/admin/statistical/statistical.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { VndCurrencyPipe } from './pipe/vnd-currency.pipe';
import { AreaComponent } from './pages/admin/statistical/area/area.component';
import { PieComponent } from './pages/admin/statistical/pie/pie.component';
import { ColumnComponent } from './pages/admin/statistical/column/column.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ClothingItemComponent,
    DetailComponent,
    CartComponent,
    PaymentComponent,
    ListProductComponent,
    LoginComponent,
    AccountComponent,
    AdminComponent,
    UserManagerComponent,
    ProductManagerComponent,
    StatisticalComponent,
    VndCurrencyPipe,
    AreaComponent,
    PieComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntdModule,
    NgApexchartsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
