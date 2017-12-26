import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Topic } from '../../models/topic';
import { Topics } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {
  currentTopics: Topic[];

  constructor(public navCtrl: NavController, public Topics: Topics, public modalCtrl: ModalController) {
    this.currentTopics = this.Topics.query();
  }

  /**
   * The view loaded, let's query our Topics for the list
   */
  ionViewDidLoad() {
  }

 /**
   * Navigate to the detail page for this Topic.
   */
  openTopic(Topic: Topic) {
    this.navCtrl.push('ListMasterPage', {
      Topic: Topic
    });
  }
}
