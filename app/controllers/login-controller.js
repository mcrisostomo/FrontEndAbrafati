app.controller('login-controller', function ($rootScope, $location, $scope, $http) {
  $scope.hasEmailError = false;
  $scope.hasPasswordError = false;
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

  $scope.loginButton = function () {
    if ($scope.email == undefined && $scope.password == undefined) {
      $scope.hasEmailError = true;
      $scope.hasPasswordError = true;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'Os campos abaixo não podem ficar vazios.';
    } else if ($scope.email == undefined) {
      $scope.hasEmailError = true;
      $scope.hasPasswordError = false;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo e-mail está vazio.';
    } else if (!verifyEmail.test($scope.email)) {
      $scope.hasEmailError = true;
      $scope.hasPasswordError = false;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo e-mail possui um formato inválido.';
    } else if ($scope.password == undefined) {
      $scope.hasEmailError = false;
      $scope.hasPasswordError = true;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo senha está vazio.';
    } else {
      $scope.hasEmailError = false;
      $scope.hasPasswordError = false;
      $scope.showErrorBox = false;
      $scope.errorMessage = '';

      window.location.href = '#/home';
      // $http.post(apiURL + '/login', [$scope.email, $scope.password]).then(function(response) {
      //   alert('ok');
      // }, function() {
      //   $scope.hasEmailError = true;
      //   $scope.showErrorBox = true;
      //   $scope.errorMessage = 'Há um problema de comunicação com o nosso servidor. Tente novamente mais tarde.';
      //   $scope.typeMessage();
      //   $scope.typeIconMessage();
      // });
    }
  }
});