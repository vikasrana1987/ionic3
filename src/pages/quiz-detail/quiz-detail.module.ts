import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { QuizDetailPage } from './quiz-detail';

import { ProgressBarComponent } from './../../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    QuizDetailPage,
    ProgressBarComponent
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
