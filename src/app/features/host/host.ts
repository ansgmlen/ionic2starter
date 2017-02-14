import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'host.html'
})
export class Host {

  constructor(public navCtrl: NavController) {
    console.log("here is host");
  }

}
