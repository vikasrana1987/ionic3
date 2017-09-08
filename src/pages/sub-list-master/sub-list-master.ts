import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'page--bun-list-master',
  templateUrl: 'sub-list-master.html'
})
export class SubListMasterPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    /*this.navCtrl.push(ItemDetailPage, {
      item: item
    });*/
  }
}
