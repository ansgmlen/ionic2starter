import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

export class GeoProvider {

  constructor(private http:Http) {

  }

  /*
   * get distance  between two locations.
   * this function returns milimeter value
   * ex) 1610000 == 1 mile
   */
  getDistance(lat1:number, lon1:number, lat2:number, lon2:number){
    const R:number = 6371000000; // Radius of the earth in milimeter
  	var dLat = (lat2 - lat1) * Math.PI / 180;
  	var dLon = (lon2 - lon1) * Math.PI / 180;
  	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  	var d = R * c; //Distance in milimeter
  	return Math.round(d);
  }


}
