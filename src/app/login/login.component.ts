import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsernamePasswordAuthRequest, UsernamePasswordAuthenticator } from '../core/authentication/user-password-authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
