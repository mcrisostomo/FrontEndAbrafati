app.controller('relatorio-controller', function ($rootScope, $location, $scope, $http, $timeout, httpService) {
  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.resultadoSelecao = false;

  $scope.selecaoRelatorio = [
    { 'id': '37', 'descricao': '01 REVISTA ABRAFATI' },
    { 'id': '49', 'descricao': '02 REVISTA ABRAFATI - CONTATOS PF' },
    { 'id': '18', 'descricao': '03 CONTATOS COM OPTIN EXPRESS E REVISTA' },
    { 'id': '14', 'descricao': '04 NOME / EMPRESA / COMISSAO' },
    { 'id': '51', 'descricao': '05 CONTATO X COMISSÃO' },
    { 'id': '57', 'descricao': '06 TESTE' },
    { 'id': '58', 'descricao': '07 LISTAGEM REENVIAR CONVITE' },
    { 'id': '59', 'descricao': '08 LISTAGEM EVENTO JANTAR INST. 2018' },
    { 'id': '60', 'descricao': '09 LISTAGEM CONFIRMADOS JANTAR' },
    { 'id': '43', 'descricao': '100 ACESSOS' }
  ];

  $timeout(function () {
    $('.select2').select2().val('37').trigger('change');
  }, 500);

  $scope.pesquisarRelatorio = function () {
    $scope.resultadoSelecao = true;
    
    $('#tblRelatorio').DataTable().destroy();
    
    $timeout(function () {
      $('#tblRelatorio').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $timeout(function () {
      $('#tblRelatorio').parent('.col-sm-12').addClass('table-responsive');
    }, 1000);
  }
});