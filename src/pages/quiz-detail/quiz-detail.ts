import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

import './../../assets/js/quizlib.js';

declare var Quiz: any;

@IonicPage()
@Component({
  selector: 'page-quiz-detail',
  templateUrl: 'quiz-detail.html'
})
export class QuizDetailPage {
  @ViewChild(Slides) slides: Slides;
  quiz: any;
  questions: any;
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
   
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

  ionViewDidLoad() {
    this.quiz = new Quiz('.swiper-wrapper', [
      '42',
      'b',
      ['b', 'c', 'd']
    ]);
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

  showResults() {
    // Check answers and continue if all questions have been answered
    if (this.quiz.checkAnswers()) {
      var quizScorePercent = this.quiz.result.scorePercentFormatted; // The unformatted percentage is a decimal in range 0 - 1
      var quizResultElement = document.getElementById('quiz-result');
      quizResultElement.style.display = 'block';
      document.getElementById('quiz-score').innerHTML = this.quiz.result.score.toString();
      document.getElementById('quiz-max-score').innerHTML = this.quiz.result.totalQuestions.toString();
      document.getElementById('quiz-percent').innerHTML = quizScorePercent.toString();

      // Change background colour of results div according to score percent
      if (quizScorePercent >= 75) quizResultElement.style.backgroundColor = '#4caf50';
      else if (quizScorePercent >= 50) quizResultElement.style.backgroundColor = '#ffc107';
      else if (quizScorePercent >= 25) quizResultElement.style.backgroundColor = '#ff9800';
      else if (quizScorePercent >= 0) quizResultElement.style.backgroundColor = '#f44336';

      // Highlight questions according to whether they were correctly answered. The callback allows us to highlight/show the correct answer
      this.quiz.highlightResults(this.handleAnswers.bind(this));
    }
  }

  hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
  handleAnswers(quiz, question, no, correct) {
    if (!correct) {
      //let quiz = this.quiz;
       // Get answers
		//var answers = question.getElementsByClassName(question.Classes.QUESTION_ANSWERS)[0];
    var ion_item = document.getElementsByClassName(quiz.Classes.QUESTION_ANSWERS);

		for (var k=0; k < ion_item.length; k++) {
      let items = ion_item[k].getElementsByTagName('ion-item');
      for (var l=0; l < items.length; l++) {
        if(this.hasClass(items[l],'item-radio') || this.hasClass(items[l],'item-checkbox'))
        {
          let elem = (this.hasClass(items[l],'item-radio')) ? items[l].getElementsByTagName('ion-radio') : items[l].getElementsByTagName('ion-checkbox');
          let value = elem[0].getAttribute('value');
          
          if (this.quiz.answers[no].indexOf(value) > -1) {
            items[l].classList.add(this.quiz.Classes.CORRECT);
          }
        }
      }
      /*if(this.hasClass(item,'item-input'))
      {
        var correctAnswer = document.createElement('span');
        correctAnswer.classList.add(this.quiz.Classes.CORRECT);
        correctAnswer.classList.add(this.quiz.Classes.TEMP); // this.quiz.checkAnswers will automatically remove elements with the temp class
        correctAnswer.innerHTML = this.quiz.answers[no];
        correctAnswer.style.marginLeft = '10px';
        console.log(correctAnswer)
        ion_item[k].parentNode.insertBefore(correctAnswer, ion_item[k].nextSibling);
      }*/
    }
    
      /*(var answers = question.getElementsByTagName('input');
      for (var i = 0; i < answers.length; i++) {
        if (answers[i].type === "checkbox" || answers[i].type === "radio") {
          // If the current input element is part of the correct answer, highlight it
          if (this.quiz.answers[no].indexOf(answers[i].value) > -1) {
            answers[i].parentNode.classList.add(this.quiz.Classes.CORRECT);
          }
        } else {
          // If the input is anything other than a checkbox or radio button, show the correct answer next to the element
          var correctAnswer = document.createElement('span');
          correctAnswer.classList.add(this.quiz.Classes.CORRECT);
          correctAnswer.classList.add(this.quiz.Classes.TEMP); // this.quiz.checkAnswers will automatically remove elements with the temp class
          correctAnswer.innerHTML = this.quiz.answers[no];
          correctAnswer.style.marginLeft = '10px';
          answers[i].parentNode.insertBefore(correctAnswer, answers[i].nextSibling);
        }
      }*/
    }
  }
}
