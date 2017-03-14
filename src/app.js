// モジュールの読み込み
import angular from 'angular';
import 'angular-route';
import 'angular-animate';
import 'angular-cookies';
import routing from './config/routing';

import myApp from './components/BaseCtrl';
import index from './components/IndexComponent';
import sample from './components/SampleComponent';

import ExceptionHandlerFactory from './factory/exceptionHandlerFactory';

export const app = angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngCookies'
]).config(routing).
    factory('$exceptionHandler', ExceptionHandlerFactory).
    component('index', index).
    component('sample', sample).
    component('myApp', myApp);

angular.bootstrap(document.body, ['app']);

