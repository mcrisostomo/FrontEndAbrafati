app.controller('cadastro-usuario-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.listaUsuarios = [];

  $scope.showAlertBox = false;

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $timeout(function () {
    $('#tblUsuarios').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novoUsuario = function () {
    $scope.tituloModal = 'Incluir Novo Usuário';
    $scope.idUsuario = '';

    $scope.nivelUsuario = [
      { 'id': '0', 'descricao': '00' },
      { 'id': '5', 'descricao': '05' },
      { 'id': '10', 'descricao': '10' },
      { 'id': '20', 'descricao': '20' },
      { 'id': '30', 'descricao': '30' },
      { 'id': '50', 'descricao': '50' },
      { 'id': '60', 'descricao': '60' }
    ];

    $scope.selecaoDepartamento = [
      { 'id': '6', 'descricao': 'ABRAFATI' },
      { 'id': '2', 'descricao': 'ATENDIMENTO' },
      { 'id': '4', 'descricao': 'COMERCIAL' },
      { 'id': '0', 'descricao': 'INDEFINIDO' },
      { 'id': '3', 'descricao': 'OPERAÇÕES' },
      { 'id': '1', 'descricao': 'TI' }
    ];

    $timeout(function () {
      $('#ddlNivelUsuario, #ddlDepartamento').val('0').trigger('change');
    }, 100);
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idUsuario = '';
  }

  $scope.forcaSenha = /^[a-zA-Z0-9]{9}$/;

  $scope.validaCampos = function () {
    if ($scope.usuario == undefined) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'Campo usuário está vazio';
    } else if ($scope.nome == undefined) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'Campo nome está vazio';
    } else if ($scope.senha == undefined) {
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

  $scope.salvarUsuario = function (id) {
    if (id == '') {
      // Post
      $scope.validaCampos();

      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-success';
      $scope.typeIconMessage = 'fa-check';
      $scope.alertMessage = 'Dados salvos com sucesso!';

      $timeout(function () {
        $('#modal-usuario').modal('hide');

        $scope.showAlertBox = false;
        $scope.exibeAlerta = '';
        $scope.typeIconMessage = '';
        $scope.alertMessage = '';
      }, 2000);
    } else {
      // Put
      $scope.validaCampos();

      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-success';
      $scope.typeIconMessage = 'fa-check';
      $scope.alertMessage = 'Dados salvos com sucesso!';

      $timeout(function () {
        $('#modal-usuario').modal('hide');

        $scope.showAlertBox = false;
        $scope.exibeAlerta = '';
        $scope.typeIconMessage = '';
        $scope.alertMessage = '';
      }, 2000);
    }
  }

  $scope.editarUsuario = function (id) {
    $scope.tituloModal = 'Editar Usuário';
  }

  $scope.excluirUsuario = function (id) {
    $scope.tituloModal = 'Excluir Usuário';
  }

  $scope.confirmarExcluirUsuario = function (id) {
    $('#excluir-usuario').modal('hide');
    $scope.tituloModal = '';
  }
});