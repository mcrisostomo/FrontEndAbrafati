app.controller('grupos-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idGrupo = '';
  $scope.descricaoGrupo = '';
  $scope.listaGrupo = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaGrupos = [
    { 'id': 1, 'descricao': 'ASSOCIADOS FABRICANTES' },
    { 'id': 2, 'descricao': 'ASSOCIADOS FABRICANTES/FORNECEDORES' },
    { 'id': 3, 'descricao': 'ASSOCIADOS FORNECEDORES' },
    { 'id': 4, 'descricao': 'ENTIDADES' },
    { 'id': 5, 'descricao': 'ESTATÍSTICA SELL IN IMOB.' },
    { 'id': 6, 'descricao': 'FABRICANTES NÃO ASSOCIADOS' },
    { 'id': 7, 'descricao': 'FABRICANTES/FORNECEDORES NÃO ASSOCIADOS' },
    { 'id': 8, 'descricao': 'FORNECEDORES NÃO ASSOCIADOS' },
    { 'id': 9, 'descricao': 'GOVERNO' },
    { 'id': 10, 'descricao': 'INDEFINIDO' },
    { 'id': 11, 'descricao': 'OUTROS' },
    { 'id': 12, 'descricao': 'PRESTADORES DE SERVIÇOS' },
    { 'id': 13, 'descricao': 'STAFF' }
  ]

  $timeout(function () {
    $('#tblGrupo').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novoGrupo = function () {
    $scope.tituloModal = 'Incluir novo grupo';
    $scope.idGrupo = '';
    $scope.descricaoGrupo = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idGrupo = '';
    $scope.descricaoGrupo = '';
  }

  $scope.salvarGrupo = function (id, descricao) {
    $('#modal-Grupo').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarGrupo = function (id, descricao) {
    $scope.tituloModal = 'Editar grupo';

    $scope.idGrupo = id;
    $scope.descricaoGrupo = descricao;
  }

  $scope.excluirGrupo = function (id) {
    $scope.tituloModal = 'Excluir grupo';

    $scope.idGrupo = id;
  }

  $scope.confirmarExcluirGrupo = function (id) {
    $('#excluir-Grupo').modal('hide');
    $scope.tituloModal = '';
  }
});