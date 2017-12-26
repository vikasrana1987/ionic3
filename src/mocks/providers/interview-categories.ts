import { Injectable } from '@angular/core';

import { InterviewCategory } from '../../models/interview-category';

@Injectable()
export class InterviewCategories {
  interviewCategories: InterviewCategory[] = [];

  constructor() {
    let interviewCategories = [
      {
        "name": "HR",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Software Development",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Engineering",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      }
    ];

    for (let interviewCategory of interviewCategories) {
      this.interviewCategories.push(new InterviewCategory(interviewCategory));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.interviewCategories;
    }

    return this.interviewCategories.filter((interviewCategory) => {
      for (let key in params) {
        let field = interviewCategory[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return interviewCategory;
        } else if (field == params[key]) {
          return interviewCategory;
        }
      }
      return null;
    });
  }

}
