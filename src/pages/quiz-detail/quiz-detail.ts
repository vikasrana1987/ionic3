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
  loadProgress: any;
  backgroundColor: any = "#f44336";
  score: any;
  maxScore: any;
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.loadProgress = 0;
    this.questions = [
      {
        title: "What is the answer to life, the universe and everything?",
        type: "textbox",
        answer:"42",
        uuid: '111',
      },
      {
        title: "Your enemy..",
        type: "radio",
        options:[
          { name: "A", value: "a" },
          { name: "B", value: "b" }
        ],
        answer:"b",
        uuid: '222'
      },
      {
        title: "Which factors will contribute to the end of humanity as we know it?",
        type: "checkbox",
        options:[
          { name: "A", value: "a" },
          { name: "B", value: "b" },
          { name: "C", value: "c" },
          { name: "D", value: "d" },
        ],
        answer: ['b', 'c', 'd'],
        uuid: '333'
      }
    ];
    console.log(this.questions)
    this.score = 0;
    this.maxScore = this.questions.length;
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
      this.score = this.quiz.result.score.toString();
      this.maxScore = this.quiz.result.totalQuestions.toString(); 
      this.loadProgress = quizScorePercent.toString(); 
      // Change background colour of results div according to score percent
      if (quizScorePercent >= 75) this.backgroundColor = '#4caf50';
      else if (quizScorePercent >= 50) this.backgroundColor = '#ffc107';
      else if (quizScorePercent >= 25) this.backgroundColor = '#ff9800';
      else if (quizScorePercent >= 0) this.backgroundColor = '#f44336';

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
    var ion_item = document.getElementsByClassName(question.className);

		for (var k=0; k < ion_item.length; k++) {
      /*let items = ion_item[k].getElementsByTagName('ion-item');
      for (var l=0; l < items.length; l++) {
        if(this.hasClass(items[l],'item-radio') || this.hasClass(items[l],'item-checkbox'))
        {
          let elem = (this.hasClass(items[l],'item-radio')) ? items[l].getElementsByTagName('ion-radio') : items[l].getElementsByTagName('ion-checkbox');
          let value = elem[0].getAttribute('value');
          if (this.quiz.answers[no].indexOf(value) > -1) {
            console.log(items[l])
            items[l].classList.add(this.quiz.Classes.CORRECT);
          }
        }
      }*/
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
