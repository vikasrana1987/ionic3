import { Injectable } from '@angular/core';

import { Topic } from '../../models/topic';

@Injectable()
export class Topics {
  topics: Topic[] = [];

  defaultItem: any = {
    "name": "Interview",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Interview",
  };


  constructor() {
    let topics = [
      {
        "name": "Interview",
        "profilePic": "assets/img/speakers/bear.jpg",
        "class": "interview"
      },
      {
        "name": "Aptitude",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "class": "aptitude"
      },
      {
        "name": "Tips",
        "profilePic": "assets/img/speakers/duck.jpg",
        "class": "tips"
      },
      {
        "name": "Quiz",
        "profilePic": "assets/img/speakers/duck.jpg",
        "class": "quiz"
      }
    ];

    for (let topic of topics) {
      this.topics.push(new Topic(topic));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.topics;
    }

    return this.topics.filter((topic) => {
      for (let key in params) {
        let field = topic[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return topic;
        } else if (field == params[key]) {
          return topic;
        }
      }
      return null;
    });
  }

  add(topic: Topic) {
    this.topics.push(topic);
  }

  delete(topic: Topic) {
    this.topics.splice(this.topics.indexOf(topic), 1);
  }
}
