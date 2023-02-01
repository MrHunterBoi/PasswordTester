import {Component} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  constructor(private appService: AppService) {}

  title = 'PasswordTesting';

  password: string = '';

  shortPassColor: string = 'red';
  secDisabledColor: string = 'gray'

  secColor: string = '';
  secNumber: number = 0;
  secOpinion: string = '';

  passVisible: boolean = false;

  onPassChange() {
    if(this.password.length > 0 && this.password.length < 8){
      this.secNumber = -1;
      return;
    }

    this.secNumber = this.appService.getSecNumber(this.password);
    [this.secColor, this.secOpinion] = this.appService.getSecOpinion(this.secNumber);
  }

  toggleHandler() {
    this.passVisible = !this.passVisible;
  }
}
