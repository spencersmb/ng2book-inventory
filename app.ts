/**
 *  Copyright (c) 2015, Fullstack.io
 *  All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  EventEmitter
} from 'angular2/core';
import {Product} from './products/product/product-model';

import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector:'inventory-app',
  templateUrl: 'products/products-list.html'
})

class InventoryApp{
  product: Product;

  constructor(){
    this.product = new Product('NiceHat', 'A Nice Black Hat','/resources/images/products/black-hat.jpg',['Men', 'Accessories', 'Hats'], 29.99)
  }
}

bootstrap(InventoryApp);
