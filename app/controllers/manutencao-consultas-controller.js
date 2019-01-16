app.controller('manutencao-consultas-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.listaConsultas = [];

  $scope.showAlertBox = false;

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaConsultas = [
    {'id':'1', 'descricao': '01 REVISTA ABRAFATI', 'select': 'teste 1234'},
    {'id':'1', 'descricao': '01 REVISTA ABRAFATI', 'select': 'teste 9999'}
  ];
  
  $timeout(function () {
    $('#tblConsultas').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaConsulta = function () {
    $scope.tituloModal = 'Incluir Nova Consulta';
    
    $scope.idConsulta = '';
    $scope.descricao = '';
    $scope.select = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idConsulta = '';
  }

  $scope.validaCampos = function () {
    if ($scope.descricao == undefined) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'O campo Descrição está vazio';
    } else if ($scope.select == undefined) {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-danger';
      $scope.typeIconMessage = 'fa-times';
      $scope.alertMessage = 'O campo Select está vazio';
    } else {
      $scope.showAlertBox = true;
      $scope.exibeAlerta = 'alert-success';
      $scope.typeIconMessage = 'fa-check';
      $scope.alertMessage = 'Consulta salva com sucesso!';

      $timeout(function () {
        $('#modal-consulta').modal('hide');

        $scope.showAlertBox = false;
        $scope.exibeAlerta = '';
        $scope.typeIconMessage = '';
        $scope.alertMessage = '';
      }, 2000);
    }
  }

  $scope.salvarConsulta = function (id) {
    if (id == '') {
      // Post
      $scope.validaCampos();
    } else {
      // Put
      $scope.validaCampos();
    }
  }

  $scope.editarConsulta = function (id, descricao, select) {
    $scope.tituloModal = 'Editar Consulta';

    $scope.idConsulta = id;
    $scope.descricao = descricao;
    $scope.select = select;
  }

  $scope.excluirConsulta = function (id) {
    $scope.tituloModal = 'Excluir Consulta';
  }

  $scope.confirmarExcluirConsulta = function (id) {
    $('#excluir-usuario').modal('hide');
    $scope.tituloModal = '';
  }
});