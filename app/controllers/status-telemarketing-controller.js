app.controller('status-telemarketing-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idStatus = '';
  $scope.descricaoStatus = '';
  $scope.listaStatus = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaStatus = [
    { 'id': 1, 'descricao': 'AGENDAMENTO', 'finalizado': 'n', 'agendamento': 's' },
    { 'id': 2, 'descricao': 'ATUALIZADO', 'finalizado': 's', 'agendamento': 's' },
    { 'id': 3, 'descricao': 'AUSENTE', 'finalizado': 'n', 'agendamento': 's' },
    { 'id': 4, 'descricao': 'CONFIRMADO', 'finalizado': 's', 'agendamento': 'n' },
    { 'id': 5, 'descricao': 'DECLINOU', 'finalizado': 's', 'agendamento': 'n' },
    { 'id': 6, 'descricao': 'REENVIAR CONVITE', 'finalizado': 'n', 'agendamento': 's' }
  ]

  $timeout(function () {
    $('#tblStatus').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novoStatus = function () {
    $scope.tituloModal = 'Incluir nova área';
    $scope.idStatus = '';
    $scope.descricaoStatus = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idStatus = '';
    $scope.descricaoStatus = '';
  }

  $scope.salvarStatus = function () {
    $('#modal-status').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarStatus = function () {
    $scope.tituloModal = 'Editar status';
  }

  $scope.excluirStatus = function () {
    $scope.tituloModal = 'Excluir status';
  }

  $scope.confirmarExcluirStatus = function () {
    $('#excluir-status').modal('hide');
    $scope.tituloModal = '';
  }
});