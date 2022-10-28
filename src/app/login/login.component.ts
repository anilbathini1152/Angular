import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // styles: [
  //   `
  //   :host {
  //     display:block;
  //     background-color: red;
  //   }
  // `,
  // ]
})
export class LoginComponent implements OnInit {

  constructor() {}
 
  ngOnInit(): void {
  }
  forgetPasswordFlag:boolean=false;

  toggleForgetPassword():void{
    this.forgetPasswordFlag=!this.forgetPasswordFlag;
  }
}
