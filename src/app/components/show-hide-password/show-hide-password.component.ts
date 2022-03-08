import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-show-hide-password',
  templateUrl: './show-hide-password.component.html',
  styleUrls: ['./show-hide-password.component.scss'],
})
export class ShowHidePasswordComponent implements OnInit {

  @ContentChild(IonInput) input: IonInput;
  showPassword: boolean;
  constructor() { }

  ngOnInit(): void {
    this.toggleShow();
  }
  
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}


