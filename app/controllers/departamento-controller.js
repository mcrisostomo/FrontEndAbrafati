app.controller('departamento-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idDepartamento = '';
  $scope.descricaoDepartamento = '';
  $scope.listaDepartamento = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaDepartamento = [
    { 'id': 1, 'descricao': 'Abrafati' },
    { 'id': 2, 'descricao': 'Atendimento' },
    { 'id': 3, 'descricao': 'Comercial' },
    { 'id': 4, 'descricao': 'Indefinido' },
    { 'id': 5, 'descricao': 'Operações' },
    { 'id': 6, 'descricao': 'TI' }
  ]

  $timeout(function () {
    $('#tblDepartamento').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaDepartamento = function () {
    $scope.tituloModal = 'Incluir nova departamento';
    $scope.idDepartamento = '';
    $scope.descricaoDepartamento = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idDepartamento = '';
    $scope.descricaoDepartamento = '';
  }

  $scope.salvarDepartamento = function (id, departamento) {
    $('#modal-departamento').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarDepartamento = function (id, departamento) {
    $scope.tituloModal = 'Editar departamento';

    $scope.idDepartamento = id;
    $scope.descricaoDepartamento = departamento;
  }

  $scope.excluirDepartamento = function (id) {
    $scope.tituloModal = 'Excluir departamento';

    $scope.idDepartamento = id;
  }

  $scope.confirmarExcluirDepartamento = function (id) {
    $('#excluir-departamento').modal('hide');
    $scope.tituloModal = '';

    $scope.idDepartamento = id;
  }
});