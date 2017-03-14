// Dependency Injection
exceptionHandlerFactory.$inject = ['$window', '$log'];
// Exception handler
export default function exceptionHandlerFactory($window, $log) {
  return function(exception, cause) {
    $log.debug(exception);
  };
};

