app.controller('proximo-telemarketing-controller', function ($rootScope, $location, $scope, $http, $timeout, httpService) {
  $scope.filter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  $scope.resultadoSelecao = false;

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.selecaoCampanha = [
    { 'id': '1', 'descricao': 'congresso e exposição' }
  ];

  $scope.pesquisarCampanha = function () {
    if ($('#ddlCampanha').val() != '') {
      $scope.resultadoSelecao = true;
    } else {
      alert('Você deve selecionar uma campanha para prosseguir.');
      $('#ddlCampanha').focus();

      $scope.resultadoSelecao = false;
    }
  }
});