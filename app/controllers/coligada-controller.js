app.controller('coligada-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idColigada = '';
  $scope.descricaoColigada = '';
  $scope.listaColigada = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaColigada = [
    { 'id': 1, 'descricao': 'Akzo Nobel' }
  ]

  $timeout(function () {
    $('#tblColigada').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaColigada = function () {
    $scope.tituloModal = 'Incluir nova coligada';
    $scope.idColigada = '';
    $scope.descricaoColigada = '';
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idColigada = '';
    $scope.descricaoColigada = '';
  }

  $scope.salvarColigada = function (id, descricao) {
    $('#modal-coligada').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarColigada = function (id, descricao) {
    $scope.tituloModal = 'Editar coligada';

    $scope.idColigada = id;
    $scope.descricaoColigada = descricao;
  }

  $scope.excluirColigada = function (id) {
    $scope.tituloModal = 'Excluir coligada';

    $scope.idColigada = id;
  }

  $scope.confirmarExcluirColigada = function (id) {
    $('#excluir-coligada').modal('hide');
    $scope.tituloModal = '';
  }
});