app.controller('alterar-senha-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.forcaSenha = /^[a-zA-Z0-9]{9}$/;

  $scope.validaCampos = function () {
    if ($scope.senha == undefined) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'Campo senha está vazio';
    } else if ($scope.forcaSenha.test($scope.senha)) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'A senha deverá conter até 10 caracteres, 4 caracteres alfabéticos, 2 números e sem caracteres especiais';
    } else if ($scope.confirmarSenha == undefined) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'Campo confirmar senha está vazio';
    } else if ($scope.confirmarSenha != $scope.senha) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'As senhas devem ser iguais';
    } else {
      $scope.showAlertBox = false;
      $scope.exibeAlerta = '';
      $scope.typeIconMessage = '';
      $scope.alertMessage = '';
    }
  }

  $scope.salvarSenha = function (id) {
    $scope.validaCampos();

    $scope.showAlertBox = true;
    $scope.exibeAlerta = 'alert-success';
    $scope.typeIconMessage = 'fa-check';
    $scope.alertMessage = 'Dados salvos com sucesso!';
  }
});