import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { InterviewCategories } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  /*constructor(public navCtrl: NavController, public topics: Topics, public modalCtrl: ModalController) {
    this.currentItems = this.topics.query();
  }*/
  constructor(public navCtrl: NavController, navParams: NavParams, public interviewCategories: InterviewCategories) {
   let item = navParams.get('item');
   this.currentItems = this.interviewCategories.query();
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
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
