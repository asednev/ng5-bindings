import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from '../app.component';
import { Ng1Component } from './ng1.component';

const appModule = angular.module('ng1App', [])
  .component('ng1', Ng1Component)
  .directive('appRoot', downgradeComponent({ component: AppComponent }))
  ;

const appName = appModule.name;

export default appName;
