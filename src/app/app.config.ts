/**
* config.ts
* app configuration and environment object.
*/
'use strict';

import { OpaqueToken } from "@angular/core";

export const APP_CONFIG = new OpaqueToken("app.config");
const currentVersion:string = "1.0.0"; //current version of app
export const AppConfig = {
  dev : {
    basedUrl : "https://www.google.com",
    version : currentVersion,
    env : "dev"
  },
  uat : {
    basedUrl : "https://www.google.com",
    version : currentVersion,
    env : "uat"
  },
  prd : {
    basedUrl : "https://www.google.com",
    version : currentVersion,
    env : "prd"
  },
  currentEnv : this.dev
}
