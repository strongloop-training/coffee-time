angular
  .module('app')
  .controller('AuthLoginController', [
    '$scope',
    'AuthService',
    '$state',
    function($scope, AuthService, $state) {
      $scope.user = {
        email: '',
        password: ''
      };

      $scope.login = function() {
        AuthService.login($scope.user.email, $scope.user.password)
          .then(function() {
            $state.go('my-reviews');
          });
      };
    }
  ])
  .controller('AuthLogoutController', [
    '$scope',
    'AuthService',
    '$state',
    function($scope, AuthService, $state) {
      AuthService.logout()
        .then(function() {
          $state.go('all-reviews');
        });
    }
  ]);