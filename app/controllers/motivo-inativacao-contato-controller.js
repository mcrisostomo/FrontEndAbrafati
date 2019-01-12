app.controller('motivo-inativacao-contato-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idMotivo = '';
  $scope.descricaoMotivo = '';
  $scope.listaMotivo = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaMotivos = [
    { 'id': 1, 'descricao': 'APOSENTADO' },
    { 'id': 2, 'descricao': 'EX-ASSOCIADO' },
    { 'id': 3, 'descricao': 'EX-FUNCIONÁRIO' },
    { 'id': 4, 'descricao': 'FALECIDO' },
    { 'id': 5, 'descricao': 'INDEFINIDO' },
    { 'id': 6, 'descricao': 'MUDOU DE EMPRESA' },
    { 'id': 7, 'descricao': 'TRABALHA NO EXTERIOR' }
  ]

  $timeout(function () {
    $('#tblMotivo').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novoMotivo = function () {
    $scope.tituloModal = 'Incluir novo motivo';
    $scope.idMotivo = '';
    $scope.descricaoMotivo = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idMotivo = '';
    $scope.descricaoMotivo = '';
  }

  $scope.salvarMotivo = function () {
    $('#modal-motivo').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarMotivo = function () {
    $scope.tituloModal = 'Editar motivo';
  }

  $scope.excluirMotivo = function () {
    $scope.tituloModal = 'Excluir motivo';
  }

  $scope.confirmarExcluirMotivo = function () {
    $('#excluir-motivo').modal('hide');
    $scope.tituloModal = '';
  }
});