app.controller('tipo-historico-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idTipo = '';
  $scope.descricaoTipo = '';
  $scope.listaTipo = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaTipo = [
    { 'id': 1, 'descricao': '1º CONTATO' },
    { 'id': 2, 'descricao': '2º CONTATO' },
    { 'id': 3, 'descricao': '3º CONTATO' },
    { 'id': 4, 'descricao': '4º CONTATO' },
    { 'id': 5, 'descricao': '5º CONTATO' }
  ]

  $timeout(function () {
    $('#tblTipo').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novoTipo = function () {
    $scope.tituloModal = 'Incluir novo tipo';
    $scope.idTipo = '';
    $scope.descricaoTipo = ''
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idTipo = '';
    $scope.descricaoTipo = ''
  }

  $scope.salvarTipo = function () {
    $('#modal-tipo').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarTipo = function () {
    $scope.tituloModal = 'Editar tipo';
  }

  $scope.excluirTipo = function () {
    $scope.tituloModal = 'Excluir tipo';
  }

  $scope.confirmarExcluirTipo = function () {
    $('#excluir-tipo').modal('hide');
    $scope.tituloModal = '';
  }
});