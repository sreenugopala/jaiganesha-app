import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }
  showTodayDate() {
     let ndate = new Date();
     return ndate;
  }
}
