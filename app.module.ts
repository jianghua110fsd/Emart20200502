import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatSlideToggleModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routes';
import { ChuckService } from './services/chuck.service';
import { ProductService } from './services/product.service';
import { CheckoutService } from './services/checkout.service';
import { LoginComponent } from './login/login.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchasehistoryComponent } from './purchasehistory/purchasehistory.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SellerTopComponent } from './seller-top/seller-top.component';
import { SignupComponent } from './signup/signup.component';
import { ReportsComponent } from './reports/reports.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ItemMaitenanceComponent } from './item-maitenance/item-maitenance.component';
import { LogoutComponent } from './logout/logout.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SignsellerComponent } from './signseller/signseller.component';
import { BuyerprofileComponent } from './buyerprofile/buyerprofile.component';
import { ItemInsertComponent } from './item-insert/item-insert.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    SearchItemComponent,
    ItemDetailComponent,
    CartComponent,
    CheckoutComponent,
    PurchasehistoryComponent,
    SignupComponent,
    TopBarComponent,
    SellerTopComponent,
    ReportsComponent,
    MyprofileComponent,
    ItemMaitenanceComponent,
    ItemListComponent,
    LogoutComponent,
    SignsellerComponent,
    BuyerprofileComponent,
    ItemInsertComponent,
  ],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [ChuckService],
  bootstrap: [AppComponent]
})
export class AppModule { }