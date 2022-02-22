import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  public retroceder() {
    this.navCtrl.navigateRoot("tabs/tab1");
  }

}
