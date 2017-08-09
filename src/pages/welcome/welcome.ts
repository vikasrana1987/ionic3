import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { Topics } from '../../providers/providers';

import { Topic } from '../../models/topic';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  currentTopics: Topic[];

  constructor(public navCtrl: NavController, public topics: Topics, public modalCtrl: ModalController) {
    this.currentTopics = this.topics.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  
  /**
   * Navigate to the detail page for this item.
   */
  openTopic(topic: Topic) {
    //this.navCtrl.push(ItemDetailPage, {
     // item: item
    //});
  }
}
