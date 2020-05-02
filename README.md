# E-mart

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Code overview

Please see the High-Level-Design files for details on how the project is structured and an idea of the flow.

### Components

You will find the following components in the source code:

*Buyer*
- **search-item**. With information about the search conditions(filters) and search results.
- **item-detail**. Holds information about the item selected and the details of it. Also holds information about the quantity buyer wants to purchase.
- **cart**. Holds information about the items selected from search results or item detail page and the quantities of them.
- **checkout**. Holds information about the items selected from cart page and purchase amount of each and a total amount.
- **purchase-history**. Holds information about buyer's purchase history by order level. 

*Seller*
- **item-maintenance**. With information about item detail and stock information of it.
- **reports**. Holds information about transaciton history which include buyer and his/her purchased item information.

### Pages

*Common*
- **Login**. The app begins here. You can login by a buyer role or a seller role.
- **User profile**. Show buyer or seller's profile and you can edit the information in it.
- **404**. Not Found page.

*Buyer*
- **Item search**. You can search items by filters or by a keyword.
- **Item detail**. Show detail information about the item selected. Also you can input the quantity you want to purchase and add the item to shopping cart or directly checkout for it.  
- **Cart**. Shows items added in and you can view details of them by click item link in the list or select some or all of the items to checkout.
- **Checkout**. Checkout the items selected.
- **Purchase history**. Show the buyers purchase history by order level.

*Seller*
- **Item maintenance**. You can add or modify or delete item information with its stock information.
- **Reports**. Show transaciton history and you can export it to a .csv file.

# Angular CLI goodies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
