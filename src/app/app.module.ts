import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { VZArrival } from './app.component';
import { Home } from './features/home/home';
import { HomeProvider } from './features/home/homeProvider';
import { Host } from './features/host/host';
import { Profile } from './features/profile/profile';
import { ProfileProvider } from './features/profile/profileProvider';
import { APP_CONFIG, AppConfig } from './app.config';

@NgModule({
  declarations: [
    VZArrival,
    Home,
    Host,
    Profile
  ],
  imports: [
    IonicModule.forRoot(VZArrival)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VZArrival,
    Home,
    Host,
    Profile
  ],
  providers: [
    HomeProvider,
    ProfileProvider,
    { provide : APP_CONFIG, useValue : AppConfig },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
