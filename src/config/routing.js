/**
 * routing
 */
routing.$inject = ['$routeProvider', '$locationProvider'];
export default function routing($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('')
  $routeProvider.when('/', {
    template: '<index></index>'
  }).when('/index', {
    template: '<index></index>',
  }).when('/sample', {
    template: '<sample></sample>',
  }).otherwise({
    redirectTo: '/'
  });
}

