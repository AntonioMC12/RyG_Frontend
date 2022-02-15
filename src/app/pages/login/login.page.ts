import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  pass: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login() {
    this.authService.SignIn(this.email, this.pass);
  }
}
