app.controller('motivo-inativacao-empresa-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idMotivo = '';
  $scope.descricaoMotivo = '';
  $scope.listaMotivo = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaMotivos = [
    { 'id': 1, 'descricao': 'EX-ASSOCIADO' },
    { 'id': 2, 'descricao': 'EX-FORNECEDOR' },
    { 'id': 3, 'descricao': 'INDEFINIDO' }
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

  $scope.salvarMotivo = function (id, descricao) {
    $('#modal-motivo').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarMotivo = function (id, descricao) {
    $scope.tituloModal = 'Editar motivo';

    $scope.idMotivo = id;
    $scope.descricaoMotivo = descricao;
  }

  $scope.excluirMotivo = function (id) {
    $scope.tituloModal = 'Excluir motivo';

    $scope.idMotivo = id;
  }

  $scope.confirmarExcluirMotivo = function (id) {
    $('#excluir-motivo').modal('hide');
    $scope.tituloModal = '';

    $scope.idMotivo = id;
  }
});