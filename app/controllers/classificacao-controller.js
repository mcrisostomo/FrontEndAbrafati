app.controller('classificacao-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idClassificacao = '';
  $scope.descricaoClassificacao = '';
  $scope.listaClassificacao = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaClassificacao = [
    { 'id': 1, 'descricao': 'Assossiado - Representante' },
    { 'id': 2, 'descricao': 'Assossiados Honorários' },
    { 'id': 3, 'descricao': 'Convidado' },
    { 'id': 4, 'descricao': 'Geral' },
    { 'id': 5, 'descricao': 'VIP' }
  ]

  $timeout(function () {
    $('#tblClassificacao').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaClassificacao = function () {
    $scope.tituloModal = 'Incluir nova área';
    $scope.idClassificacao = '';
    $scope.descricaoClassificacao = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idClassificacao = '';
    $scope.descricaoClassificacao = '';
  }

  $scope.salvarClassificacao = function (id, descricao) {
    $('#modal-classificacao').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarClassificacao = function (id, descricao) {
    $scope.tituloModal = 'Editar classificação';

    $scope.idClassificacao = id;
    $scope.descricaoClassificacao = descricao;
  }

  $scope.excluirClassificacao = function (id) {
    $scope.tituloModal = 'Excluir classificação';

    $scope.idClassificacao = id;
  }

  $scope.confirmarExcluirClassificacao = function (id) {
    $('#excluir-classificacao').modal('hide');
    $scope.tituloModal = '';
  }
});