app.controller('area-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idArea = '';
  $scope.descricaoArea = '';
  $scope.listaArea = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaArea = [
    { 'id': 1, 'descricao': 'ADMINISTRATIVA' },
    { 'id': 2, 'descricao': 'COMERCIAL' },
    { 'id': 3, 'descricao': 'COMPRAS' },
    { 'id': 4, 'descricao': 'COMUNICAÇÃO' },
    { 'id': 5, 'descricao': 'DIRETORIA' },
    { 'id': 6, 'descricao': 'FINANCEIRA' },
    { 'id': 7, 'descricao': 'INDUSTRIAL' },
    { 'id': 8, 'descricao': 'JURÍDICA' },
    { 'id': 9, 'descricao': 'MARKETING' },
    { 'id': 10, 'descricao': 'MEIO AMBIENTE' },
    { 'id': 11, 'descricao': 'PRESIDÊNCIA' },
    { 'id': 12, 'descricao': 'RECURSOS HUMANOS' },
    { 'id': 13, 'descricao': 'TI' },
    { 'id': 14, 'descricao': 'TÉCNICA' }
  ]

  $timeout(function () {
    $('#tblArea').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaArea = function () {
    $scope.tituloModal = 'Incluir nova área';
    $scope.idArea = '';
    $scope.descricaoArea = ''
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idArea = '';
    $scope.descricaoArea = ''
  }

  $scope.salvarArea = function () {
    $('#modal-area').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarArea = function (descricao) {
    $scope.tituloModal = 'Editar área';

    $scope.descricaoArea = descricao;
  }

  $scope.excluirArea = function (id) {
    $scope.tituloModal = 'Excluir área';

    $scope.idArea = id;
  }

  $scope.confirmarExcluirArea = function (id) {
    $('#excluir-area').modal('hide');
    $scope.tituloModal = '';
  }
});