import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  getSecNumber(password: string): number {
    let secNumber: number = 0;
    password.match(/\d+/) ? secNumber+=1 : 0;
    password.match(/[a-zA-Z]/) ? secNumber++ : 0;
    password.match(/\W/) ? secNumber++ : 0;
    return secNumber;
  }

  getSecOpinion(secNumber: number): any {
    let secColour:string = 'gray',
      secOpinion:string = 'Weak';
    switch (secNumber) {
      case 1:
        secColour = 'red';
        secOpinion = 'Weak';
        break;
      case 2:
        secColour = 'yellow';
        secOpinion = 'Good';
        break;
      case 3:
        secColour = '#64e034';
        secOpinion = 'Strong';
        break;
    }
    return [secColour, secOpinion];
  }
}
