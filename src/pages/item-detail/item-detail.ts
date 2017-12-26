import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  @ViewChild(Slides) slides: Slides;
  item: any;
  questions: any;
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.questions = [
      {
        title: "values.TUTORIAL_SLIDE1_TITLE",
        description: "values.TUTORIAL_SLIDE1_DESCRIPTION",
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: "values.TUTORIAL_SLIDE2_TITLE",
        description: "values.TUTORIAL_SLIDE2_DESCRIPTION",
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: "values.TUTORIAL_SLIDE3_TITLE",
        description: "values.TUTORIAL_SLIDE3_DESCRIPTION",
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];
  }
  slidePrev(){
    this.slides.slidePrev(500);
  }
  slideNext(){
    this.slides.slideNext(500);
  }
  onSlideChangeStart(slider) {
    // this.showSkip = !slider.isEnd();
  }
}
