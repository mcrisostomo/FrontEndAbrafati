app.controller('tratamento-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idTratamento = '';
  $scope.descricaoTratamento = '';
  $scope.listaTratamento = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaTratamento = [
    { 'id': 1, 'descricao': 'DR.' },
    { 'id': 2, 'descricao': 'DRA.' },
    { 'id': 3, 'descricao': 'EXCELENTÍSSIMO SENHOR' },
    { 'id': 4, 'descricao': 'ING' },
    { 'id': 5, 'descricao': 'MR.' },
    { 'id': 6, 'descricao': 'MRS.' },
    { 'id': 7, 'descricao': 'MS.' },
    { 'id': 8, 'descricao': 'SR.' },
    { 'id': 9, 'descricao': 'SRA.' },
    { 'id': 10, 'descricao': 'V. SA.' },
    { 'id': 11, 'descricao': 'V. EXA.' },
    { 'id': 12, 'descricao': 'VOSSA MAGNIFICÊNCIA' }
  ]

  $timeout(function () {
    $('#tblTratamento').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novoTratamento = function () {
    $scope.tituloModal = 'Incluir novo tratamento';
    $scope.idTratamento = '';
    $scope.descricaoTratamento = ''
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idTratamento = '';
    $scope.descricaoTratamento = ''
  }

  $scope.salvarTratamento = function () {
    $('#modal-tratamento').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarTratamento = function () {
    $scope.tituloModal = 'Editar tratamento';
  }

  $scope.excluirTratamento = function () {
    $scope.tituloModal = 'Excluir tratamento';
  }

  $scope.confirmarExcluirTratamento = function () {
    $('#excluir-tratamento').modal('hide');
    $scope.tituloModal = '';
  }
});