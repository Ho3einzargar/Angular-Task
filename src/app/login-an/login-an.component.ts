import { user } from './../User';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
declare const localstorage: any;

@Component({
  selector: 'app-login-an',
  templateUrl: './login-an.component.html',
  styleUrls: ['./login-an.component.scss']
})
export class LoginAnComponent implements OnInit {
  Userinfo : user = {
    Username: '',
    Password: ''
  };
  
  onClick() {

    localstorage();

  }
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
