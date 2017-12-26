import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class InterviewCategories {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/interview-categories', params);
  }

}
