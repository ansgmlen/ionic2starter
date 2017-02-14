import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileProvider} from './profileProvider';

@Component({
  selector: 'page-page3',
  templateUrl: 'profile.html',
  providers : [ProfileProvider]
})

export class Profile {

  currentUser : any = {
    firstName : "",
    lastName : "",
    profileImg : "",
    email : "",
    phone : "",
    company : "",
    bio : "",
    checkedPrivacy : false
  }

  data:Array<any> = [];

  constructor(public navCtrl: NavController) {
    this.currentUser.firstName = "heedoo";
    this.currentUser.lastName = "Moon";
  }


}
