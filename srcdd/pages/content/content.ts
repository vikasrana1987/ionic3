import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import './../../assets/js/quizlib.1.0.0.js';

declare var Quiz: any;


@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  quiz: any;
  constructor(public navCtrl: NavController) {

  }
  /**
  * The view loaded, let's query our items for the list
  */
  ionViewDidLoad() {
    this.quiz = new Quiz('quiz', [
      '42',
      'b',
      ['b', 'c', 'd']
    ]);
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
  handleAnswers(question, no, correct) {
    if (!correct) {
      let quiz = this.quiz;
      var answers = question.getElementsByTagName('input');
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
      }
    }
  }
}
