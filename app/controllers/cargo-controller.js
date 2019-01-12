app.controller('cargo-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idCargo = '';
  $scope.descricaoCargo = '';
  $scope.listaCargo = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaCargo = [
    { 'id': 1, 'descricao': 'Advogado' },
    { 'id': 2, 'descricao': 'Analista' },
    { 'id': 3, 'descricao': 'Assessor (a)' },
    { 'id': 4, 'descricao': 'Assistente' },
    { 'id': 5, 'descricao': 'Consultor' },
    { 'id': 6, 'descricao': 'Consultor' },
    { 'id': 7, 'descricao': 'Contador' },
    { 'id': 8, 'descricao': 'Coordenador (a)' },
    { 'id': 9, 'descricao': 'Diretor (a)' },
    { 'id': 10, 'descricao': 'Estagiário (a)' },
    { 'id': 11, 'descricao': 'Gerente' },
    { 'id': 12, 'descricao': 'Gerente Geral' },
    { 'id': 13, 'descricao': 'Outros' },
    { 'id': 14, 'descricao': 'Presidente' },
    { 'id': 15, 'descricao': 'Professor (a)' },
    { 'id': 16, 'descricao': 'Químico (a)' },
    { 'id': 17, 'descricao': 'Secretária' },
    { 'id': 18, 'descricao': 'Superintendente' },
    { 'id': 19, 'descricao': 'Tesoureiro' },
    { 'id': 20, 'descricao': 'Técnico (a)' },
    { 'id': 21, 'descricao': 'Vice-Presidente' }
  ]

  $timeout(function () {
    $('#tblCargo').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novoCargo = function (id, descricao) {
    $scope.tituloModal = 'Incluir novo cargo';
    $scope.idCargo = '';
    $scope.descricaoCargo = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idCargo = '';
    $scope.descricaoCargo = '';
  }

  $scope.salvarCargo = function (id, descricao) {
    $('#modal-cargo').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarCargo = function (id, descricao) {
    $scope.tituloModal = 'Editar cargo';

    $scope.idCargo = id;
    $scope.descricaoCargo = descricao;
  }

  $scope.excluirCargo = function (id) {
    $scope.tituloModal = 'Excluir cargo';

    $scope.idCargo = id;
  }

  $scope.confirmarExcluirCargo = function (id) {
    $('#excluir-cargo').modal('hide');
    $scope.tituloModal = '';
  }
});