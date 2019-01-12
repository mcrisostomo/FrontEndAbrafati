app.controller('campanha-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idCampanha = '';
  $scope.descricaoCampanha = '';
  $scope.tentativaCampanha = '';
  $scope.listaCampanha = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaCampanha = [
    { 'id': 1, 'descricao': 'CONGRESSO E EXPOSIÇÃO', 'ativo': 'S', 'tentativa': 10 },
    { 'id': 2, 'descricao': 'FÓRUM 2012', 'ativo': 'N', 'tentativa': 1 },
    { 'id': 3, 'descricao': 'teste', 'ativo': 'N', 'tentativa': 10 }
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
    $scope.descricaoCampanha = '';
    $scope.tentativaCampanha = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idCampanha = '';
    $scope.descricaoCampanha = '';
    $scope.tentativaCampanha = '';
  }

  $scope.salvarCampanha = function () {
    $('#modal-campanha').modal('hide');

    $scope.tituloModal = '';
    $scope.idCampanha = '';
    $scope.descricaoCampanha = '';
    $scope.tentativaCampanha = '';
  }

  $scope.editarCampanha = function (id, descricao, ativo, tentativa) {
    $scope.tituloModal = 'Editar campanha';

    $scope.idCampanha = id;
    $scope.descricaoCampanha = descricao;
    $scope.campanhaAtiva = ativo;
    $scope.tentativaCampanha = tentativa;
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