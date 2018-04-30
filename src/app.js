// モジュールの読み込み
import angular from 'angular';
import 'angular-route';
import 'angular-animate';
import routing from './config/routing';

import myApp from './components/AppComponent';
import index from './components/IndexComponent';
import sample from './components/SampleComponent';

import ExceptionHandlerFactory from './factory/exceptionHandlerFactory';

export const app = angular.module('app', [
  'ngRoute',
  'ngAnimate',
]).config(routing).
    factory('$exceptionHandler', ExceptionHandlerFactory).
    component('index', index).
    component('sample', sample).
    component('myApp', myApp);

angular.bootstrap(document.body, ['app']);

