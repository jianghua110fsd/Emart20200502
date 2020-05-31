import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchasehistoryComponent } from './purchasehistory/purchasehistory.component';
import { SignupComponent } from './signup/signup.component';
import { SellerTopComponent } from './seller-top/seller-top.component';
import { ReportsComponent } from './reports/reports.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ItemMaitenanceComponent } from './item-maitenance/item-maitenance.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LogoutComponent } from './logout/logout.component';
import { SignsellerComponent } from './signseller/signseller.component';
import { BuyerprofileComponent } from './buyerprofile/buyerprofile.component';
import { ItemInsertComponent } from './item-insert/item-insert.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: LoginComponent },
    { path: 'itemsearch', component: SearchItemComponent },
    { path: 'itemdetail/:productID', component: ItemDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'pchist', component: PurchasehistoryComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'seller-top', component: SellerTopComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'myprofile', component: MyprofileComponent },
    { path: 'item-maitenance/:prdId', component: ItemMaitenanceComponent },
    { path: 'item-list', component: ItemListComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'signseller', component: SignsellerComponent },
    { path: 'buyerprofile', component: BuyerprofileComponent },
    { path: 'item-insert', component: ItemInsertComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true })], // <-- debugging purposes only)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    LoginComponent,
    SearchItemComponent,
    ItemDetailComponent,
    CartComponent,
    CheckoutComponent,
    PurchasehistoryComponent,
    SignupComponent,
    SellerTopComponent,
    ReportsComponent,
    MyprofileComponent,
    ItemMaitenanceComponent,
    ItemListComponent,
    LogoutComponent,
    SignsellerComponent,
    BuyerprofileComponent,
    ItemInsertComponent,
    PageNotFoundComponent,
    TopBarComponent,
];

