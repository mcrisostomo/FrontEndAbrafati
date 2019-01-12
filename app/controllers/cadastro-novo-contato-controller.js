app.controller('cadastro-novo-contato-controller', function ($rootScope, $location, $scope, $http) {
  $scope.showAlertBox = false;
  $scope.alertMessage = '';

  $scope.contatoEmpresa = [];
  $scope.selecaoComunicacao = [];
  $scope.tipoTratamento = [];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.contatoEmpresa = [
    { 'id': 1, 'contato': 'Sim' },
    { 'id': 2, 'contato': 'Não' }
  ];

  $scope.selecaoComunicacao = [
    { 'id': 1, 'comunicacao': 'Express' },
    { 'id': 2, 'comunicacao': 'Revista' }
  ];

  $scope.tipoTratamento = [
    { 'id': 1, 'tratamento': 'SR.' },
    { 'id': 2, 'tratamento': 'SRA' },
    { 'id': 3, 'tratamento': 'DR.' },
    { 'id': 4, 'tratamento': 'DRA.' },
    { 'id': 5, 'tratamento': 'MR.' },
    { 'id': 6, 'tratamento': 'MRS.' },
    { 'id': 7, 'tratamento': 'EXCELENTÍSSIMO SENHOR' },
    { 'id': 8, 'tratamento': 'V. EXA.' },
    { 'id': 9, 'tratamento': 'V SA.' },
    { 'id': 10, 'tratamento': 'VOSSA MAGNIFICÊNCIA' },
    { 'id': 11, 'tratamento': 'MS.' },
    { 'id': 12, 'tratamento': 'ING' },
  ];
});