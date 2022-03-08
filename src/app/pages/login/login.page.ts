import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  pass: string;

  constructor(private authService: AuthService,private router:Router) { }

  public async ngOnInit() {
    if (await this.authService.checkUser()) {     
      this.router.navigate(['']);
    }
  }

  public login() {
    this.authService.SignIn(this.email, this.pass);
  }
}
