app.controller('comissao-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idComissao = '';
  $scope.codComissao = '';
  $scope.nomeComissao = '';
  $scope.status = '';
  $scope.listaComissao = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaComissao = [
    { 'id': 1, 'cod': 'AM', 'nome': 'Abastecimento de Mercado', 'status': 'N' },
    { 'id': 2, 'cod': 'AB', 'nome': 'Abrafati', 'status': 'S' },
    { 'id': 3, 'cod': 'ACS', 'nome': 'acs 2016 prospects', 'status': 'N' }
  ]

  $timeout(function () {
    $('#tblComissao').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaComissao = function () {
    $scope.tituloModal = 'Incluir nova comissão';
    $scope.codComissao = '';
    $scope.nomeComissao = '';
    $scope.status = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.codComissao = '';
    $scope.nomeComissao = '';
    $scope.status = '';
  }

  $scope.salvarComissao = function (id, codComissao, nomeComissao, status, statusComissao) {
    $('#modal-comissao').modal('hide');

    $scope.tituloModal = '';

    //console.log($scope.status = status != '' ? status : statusComissao);

    $scope.tituloModal = '';
    $scope.codComissao = '';
    $scope.nomeComissao = '';
    $scope.status = '';
  }

  $scope.editarComissao = function (id, codComissao, nomeComissao, status) {
    $scope.tituloModal = 'Editar comissão';

    $scope.idComissao = id;
    $scope.codComissao = codComissao;
    $scope.nomeComissao = nomeComissao;
    $scope.statusComissao = status;
  }

  $scope.excluirComissao = function (id) {
    $scope.tituloModal = 'Excluir comissão';

    $scope.idComissao = id;
  }

  $scope.confirmarExcluirComissao = function (id) {
    $('#excluir-comissao').modal('hide');
    $scope.tituloModal = '';
  }
});