import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { QuizDetailPage } from './quiz-detail';

@NgModule({
  declarations: [
    QuizDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    QuizDetailPage
  ]
})
export class QuizDetailPageModule { }
