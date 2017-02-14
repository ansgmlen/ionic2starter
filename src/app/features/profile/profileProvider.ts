import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { APP_CONFIG } from '../../app.config';

@Injectable()
export class ProfileProvider {

  constructor(private http: Http, @Inject(APP_CONFIG) private appConfig:any) {

   console.log("fire", appConfig);

  }

  getHost(params: any) {

    var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(params.name) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';

    return this.http.get(url)
      .map(res => {
        return res.json();
      })
      .toPromise()
  }

}
