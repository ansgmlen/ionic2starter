import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {HostProvider} from '../host/homeProvider';
import {HomeProvider} from './homeProvider';
//import {HomeProvider} from '../home/homeProvider';

//import *  as Config from './app.config';

@Component({
  selector: 'page-page1',
  templateUrl: 'home.html',
  providers : [HomeProvider]
})
export class Home {

  currentUser : any = {
    firstName : "",
    lastName : "",
    name : "Home Alone"
  }

  data:Array<any> = [];

  constructor(public navCtrl: NavController, private HomeProvider : HomeProvider) {
    this.currentUser.firstName = "heedoo";
    this.currentUser.lastName = "Moon";
    this.getName();
  }

  getName(){
    this.HomeProvider.getHost(this.currentUser).then(function(res){
      console.log("result: ", res)
    }, function(err){
      console.log(err);
    });
    //alert(this.currentUser.firstName + " " + this.currentUser.lastName);
  }

}
