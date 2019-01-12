app.controller('novo-evento-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tipoEvento = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.tipoEvento = [
    { 'id': 1, 'tipo': 'Tipo Teste 1' },
    { 'id': 2, 'tipo': 'Tipo Teste 2' },
    { 'id': 3, 'tipo': 'Tipo Teste 3' },
    { 'id': 4, 'tipo': 'Tipo Teste 4' },
    { 'id': 5, 'tipo': 'Tipo Teste 5' }
  ];

  $('#dataInicio').datepicker({
    autoclose: true
  });

  $('#dataFim').datepicker({
    autoclose: true
  });
});