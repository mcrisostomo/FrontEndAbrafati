app.controller('forgot-password-controller', function ($rootScope, $location, $scope, $http) {
  $scope.hasEmailError = false;
  $scope.showErrorBox = false;
  $scope.errorMessage = '';

  $('body').removeClass('skin-blue sidebar-mini').addClass('login-page');

  $('#header, #nav, #footer').css('display', 'none');

  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' /* optional */
  });

  var verifyEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  $scope.typeMessage = function () {
    if($scope.hasEmailError) {
      return 'alert-danger';
    } else {
      return 'alert-success';
    }
  }

  $scope.typeIconMessage = function () {
    if($scope.hasEmailError) {
      return 'fa-times';
    } else {
      return 'fa-check';
    }
  }

  $scope.recoverPassword = function () {
    if ($scope.email == undefined) {
      $scope.hasEmailError = true;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo e-mail está vazio.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else if (!verifyEmail.test($scope.email)) {
      $scope.hasEmailError = true;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo e-mail possui um formato inválido.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else {
      $scope.hasEmailError = false;
      $scope.showErrorBox = false;
      $scope.errorMessage = '';
      $scope.typeMessage();
      $scope.typeIconMessage();

      // window.location.href = '#/index';
      $http.post(apiURL + '/recover-password', [$scope.email]).then(function(response) {
        $scope.hasEmailError = false;
        $scope.showErrorBox = true;
        $scope.errorMessage = 'E-mail enviado com sucesso para ' + $scope.email;
        $scope.typeMessage();
        $scope.typeIconMessage();
      }, function() {
        $scope.hasEmailError = true;
        $scope.showErrorBox = true;
        $scope.errorMessage = 'Há um problema de comunicação com o nosso servidor. Tente novamente mais tarde.';
        $scope.typeMessage();
        $scope.typeIconMessage();
      });
    }
  }
});