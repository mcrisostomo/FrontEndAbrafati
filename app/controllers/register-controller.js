app.controller('register-controller', function ($rootScope, $location, $scope, $http) {
  $scope.hasFullNameError = false;
  $scope.hasEmailError = false;
  $scope.hasPasswordError = false;
  $scope.hasConfirmPasswordError = false;
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
    if ($scope.hasFullNameError || $scope.hasEmailError || $scope.hasPasswordError || hasConfirmPasswordError) {
      return 'alert-danger';
    } else {
      return 'alert-success';
    }
  }

  $scope.typeIconMessage = function () {
    if ($scope.hasFullNameError || $scope.hasEmailError || $scope.hasPasswordError || hasConfirmPasswordError) {
      return 'fa-times';
    } else {
      return 'fa-check';
    }
  }

  $scope.signUp = function () {
    if ($scope.fullName == undefined && $scope.email == undefined && $scope.password == undefined && $scope.confirmPassword == undefined) {
      $scope.hasFullNameError = true;
      $scope.hasEmailError = true;
      $scope.hasPasswordError = true;
      $scope.hasConfirmPasswordError = true;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'Os campos abaixo não podem ficar vazios.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else if ($scope.fullName == undefined) {
      $scope.hasFullNameError = true;
      $scope.hasEmailError = false;
      $scope.hasPasswordError = false;
      $scope.hasConfirmPasswordError = false;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo nome completo está vazio.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else if ($scope.email == undefined) {
      $scope.hasFullNameError = false;
      $scope.hasEmailError = true;
      $scope.hasPasswordError = false;
      $scope.hasConfirmPasswordError = false;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo e-mail está vazio.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else if (!verifyEmail.test($scope.email)) {
      $scope.hasFullNameError = false;
      $scope.hasEmailError = true;
      $scope.hasPasswordError = false;
      $scope.hasConfirmPasswordError = false;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo e-mail possui um formato inválido.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else if ($scope.password == undefined) {
      $scope.hasFullNameError = false;
      $scope.hasEmailError = false;
      $scope.hasPasswordError = true;
      $scope.hasConfirmPasswordError = false;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo senha está vazio.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else if ($scope.confirmPassword == undefined) {
      $scope.hasFullNameError = false;
      $scope.hasEmailError = false;
      $scope.hasPasswordError = false;
      $scope.hasConfirmPasswordError = true;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'O campo confirmar senha está vazio.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else if ($scope.password != $scope.confirmPassword) {
      $scope.hasFullNameError = false;
      $scope.hasEmailError = false;
      $scope.hasPasswordError = true;
      $scope.hasConfirmPasswordError = true;
      $scope.showErrorBox = true;
      $scope.errorMessage = 'Os campos de senha precisam ser iguais.';
      $scope.typeMessage();
      $scope.typeIconMessage();
    } else {
      $http.post(apiURL + '/sign-up', [$scope.email, $scope.password]).then(function (response) {
        $scope.hasFullNameError = false;
        $scope.hasEmailError = false;
        $scope.hasPasswordError = false;
        $scope.hasConfirmPasswordError = false;
        $scope.showErrorBox = true;
        $scope.errorMessage = 'Registro efetuado com sucesso. Para logar no sistema, <a href="#/login">clique aqui</a>.';
        $scope.typeMessage();
        $scope.typeIconMessage();
      }, function () {
        $scope.hasFullNameError = true;
        $scope.hasEmailError = true;
        $scope.hasPasswordError = true;
        $scope.hasConfirmPasswordError = true;
        $scope.showErrorBox = true;
        $scope.errorMessage = 'Há um problema de comunicação com o nosso servidor. Tente novamente mais tarde.';
        $scope.typeMessage();
        $scope.typeIconMessage();
      });
    }
  }
});