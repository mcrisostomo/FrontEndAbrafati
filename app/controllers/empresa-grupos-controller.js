app.controller('empresa-grupos-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.filter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.gruposEmpresa = [
    { 'id': 1, 'tipoGrupo': 'INDEFINIDO' },
    { 'id': 2, 'tipoGrupo': 'ASSOCIADOS FABRICANTES' },
    { 'id': 3, 'tipoGrupo': 'ASSOCIADOS FORNECEDORES' },
    { 'id': 4, 'tipoGrupo': 'FABRICANTES NÃO ASSOCIADOS' },
    { 'id': 5, 'tipoGrupo': 'FORNECEDORES NÃO ASSOCIADOS' },
    { 'id': 6, 'tipoGrupo': 'ENTIDADES' },
    { 'id': 7, 'tipoGrupo': 'GOVERNO' },
    { 'id': 8, 'tipoGrupo': 'PRESTADORES DE SERVIÇOS' },
    { 'id': 9, 'tipoGrupo': 'STAFF' },
    { 'id': 10, 'tipoGrupo': 'OUTROS' },
    { 'id': 11, 'tipoGrupo': 'ASSOCIADOS FABRICANTES/FORNECEDORES' },
    { 'id': 12, 'tipoGrupo': 'FABRICANTES/FORNECEDORES NÃO ASSOCIADOS' },
    { 'id': 13, 'tipoGrupo': 'ESTATÍSTICA SELL IN IMOB.' }
  ];
});