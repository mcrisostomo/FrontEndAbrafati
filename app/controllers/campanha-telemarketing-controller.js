app.controller('campanha-telemarketing-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idCampanha = '';
  $scope.campanhas = [];
  $scope.status = [];
  $scope.listaCampanha = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.campanhas = [
    { 'id:': 1, 'descricao': 'CONGRESSO E EXPOSIÇÃO' },
    { 'id:': 2, 'descricao': 'Teste' }
  ]

  $scope.status = [
    { 'id': 1, 'descricao': 'Agendamento' },
    { 'id': 2, 'descricao': 'Confirmado' },
    { 'id': 3, 'descricao': 'Declinou' },
    { 'id': 4, 'descricao': 'Reenviar Convite' },
    { 'id': 5, 'descricao': 'Atualizado' }
  ]

  $scope.listaCampanha = [
    { 'id': 1, 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'Agendamento' },
    { 'id': 2, 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'Confirmado' },
    { 'id': 3, 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'Declinou' },
    { 'id': 4, 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'Reenviar Convite' },
    { 'id': 5, 'campanha': 'Teste', 'status': 'Atualizado' },
    { 'id': 6, 'campanha': 'Teste', 'status': 'Confirmado' }
  ]

  $timeout(function () {
    $('#tblCampanha').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaCampanha = function () {
    $scope.tituloModal = 'Incluir nova campanha';
    $scope.idCampanha = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idCampanha = '';
  }

  $scope.salvarCampanha = function () {
    $('#modal-campanha').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarCampanha = function (id, campanha, status) {
    $scope.tituloModal = 'Editar campanha';

    $scope.idCampanha = id;
    $scope.tipoCampanha = campanha;
    $scope.tipoStatus = status;

  }

  $scope.excluirCampanha = function (id) {
    $scope.tituloModal = 'Excluir campanha';

    $scope.idCampanha = id;
  }

  $scope.confirmarExcluirCampanha = function (id) {
    $('#excluir-campanha').modal('hide');
    $scope.tituloModal = '';
  }
});