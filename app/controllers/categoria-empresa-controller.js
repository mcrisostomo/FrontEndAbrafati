app.controller('categoria-empresa-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tituloModal = '';
  $scope.idCategoria = '';
  $scope.descricaoCategoria = '';
  $scope.listaCategoria = [];
  
  $scope.idSubCategoria = '';
  $scope.descricaoSubCategoria = '';
  $scope.listaSubCategoria = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.listaCategoria = [
    { 'id': 1, 'categoria': 'Fornecedor' },
    { 'id': 2, 'categoria': 'fabricante' }
  ]

  $scope.listaSubCategoria = [
    { 'id': 1, 'categoria': 'Fornecedor', 'subCategoria': 'solvente' },
    { 'id': 2, 'categoria': 'Fornecedor', 'subCategoria': 'embalagem' },
    { 'id': 3, 'categoria': 'Fornecedor', 'subCategoria': 'emulsão e resina' },
    { 'id': 4, 'categoria': 'Fornecedor', 'subCategoria': 'pigmento' },
    { 'id': 5, 'categoria': 'Fornecedor', 'subCategoria': 'equipamento e serviço' },
    { 'id': 6, 'categoria': 'Fabricante', 'subCategoria': 'industral' },
    { 'id': 7, 'categoria': 'Fabricante', 'subCategoria': 'automotivo' },
    { 'id': 8, 'categoria': 'Fabricante', 'subCategoria': 'repintura' },
    { 'id': 9, 'categoria': 'Fabricante', 'subCategoria': 'imobiliária' },
    { 'id': 10, 'categoria': 'Fabricante', 'subCategoria': 'marítima' },
    { 'id': 11, 'categoria': 'Fabricante', 'subCategoria': 'tinta em pó' },
    { 'id': 12, 'categoria': 'Fabricante', 'subCategoria': 'tinta para madeira' },
    { 'id': 13, 'categoria': 'Fabricante', 'subCategoria': 'tinta artesanal' },
    { 'id': 14, 'categoria': 'Fabricante', 'subCategoria': 'artística' },
    { 'id': 15, 'categoria': 'Fabricante', 'subCategoria': 'impressão' },
  ]

  $timeout(function () {
    $('#tblCategoria').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });

    $('#tblSubCategoria').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $scope.novaCategoria = function () {
    $scope.tituloModal = 'Incluir nova categoria';
    $scope.idCategoria = '';
    $scope.descricaoCategoria = ''
  }

  $scope.novaSubCategoria = function () {
    $scope.tituloModal = 'Incluir nova sub-categoria';
    $scope.idSubCategoria = '';
    $scope.descricaoSubCategoria = ''
  }

  $scope.fecharModal = function () {
    $scope.tituloModal = '';
    $scope.idCategoria = '';
    $scope.descricaoCategoria = ''
    
    $scope.idSubCategoria = '';
    $scope.descricaoSubCategoria = ''
  }

  $scope.salvarCategoria = function () {
    $('#modal-categoria').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.salvarSubCategoria = function () {
    $('#modal-sub-categoria').modal('hide');

    $scope.tituloModal = '';
  }

  $scope.editarCategoria = function () {
    $scope.tituloModal = 'Editar categoria';
  }

  $scope.editarSubCategoria = function () {
    $scope.tituloModal = 'Editar sub-categoria';
  }

  $scope.excluirCategoria = function () {
    $scope.tituloModal = 'Excluir categoria';
  }

  $scope.excluirSubCategoria = function () {
    $scope.tituloModal = 'Excluir sub-categoria';
  }

  $scope.confirmarExcluirCategoria = function () {
    $('#excluir-categoria').modal('hide');
    $scope.tituloModal = '';
  }

  $scope.confirmarExcluirSubCategoria = function () {
    $('#excluir-sub-categoria').modal('hide');
    $scope.tituloModal = '';
  }
});