app.controller('buscar-evento-controller', function ($rootScope, $location, $scope, $http, $timeout, httpService) {
  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.resultadoSelecao = false;

  $scope.selecaoEvento = [
    { 'id': '63', 'descricao': 'PSQ' },
    { 'id': '47', 'descricao': 'ABRAFATI 2017' },
    { 'id': '87', 'descricao': 'ABRAFATI 2019' },
    { 'id': '65', 'descricao': 'ABRAFATI 2017 - CERIMONIA DE ABERTURA' },
    { 'id': '35', 'descricao': 'CONVIDADOS VIP _ DF _ ABRAFATI 2015' },
    { 'id': '6', 'descricao': 'ABRAFATI 2013' },
    { 'id': '25', 'descricao': 'ABRAFATI 2015' },
    { 'id': '11', 'descricao': 'AGRADECIMENTO ABRAFATI 2013 - CONTATOS DF' },
    { 'id': '9', 'descricao': 'CONVIDADOS ABRAFATI 2013 - PROGRAMA COMPLETO' },
    { 'id': '53', 'descricao': 'CONGRESSO INTERNACIONAL DE TINTAS 2015' },
    { 'id': '98', 'descricao': '31º CURSO DE TECNOLOGIA EM TINTAS' },
    { 'id': '69', 'descricao': '30º CURSO DE TECNOLOGIA EM TINTAS' },
    { 'id': '29', 'descricao': '22º  CURSO DE TECNOLOGIA EM TINTAS ' },
    { 'id': '28', 'descricao': '21º  CURSO DE TECNOLOGIA EM TINTAS' },
    { 'id': '27', 'descricao': '20º  CURSO DE TECNOLOGIA EM TINTAS ' },
    { 'id': '45', 'descricao': '27º CURSO DE TECNOLOGIA EM TINTAS' },
    { 'id': '19', 'descricao': '24º CURSO DE TECNOLOGIA EM TINTAS' },
    { 'id': '18', 'descricao': '23º CURSO DE TECNOLOGIA EM TINTAS' },
    { 'id': '48', 'descricao': 'SALÃO DE TINTAS DE QUALIDADE BY ABRAFATI - FEICON 2017' },
    { 'id': '91', 'descricao': 'LANÇAMENTO EXPOSITORES - ABRAFATI 2019' },
    { 'id': '15', 'descricao': 'CONVIDADOS FEICON 2014' },
    { 'id': '93', 'descricao': '12º FÓRUM ABRAFATI' },
    { 'id': '7', 'descricao': '8º FÓRUM ABRAFATI DA INDÚSTRIA DE TINTAS' },
    { 'id': '5', 'descricao': '6º FÓRUM ABRAFATI DA INDÚSTRIA DE TINTAS ' },
    { 'id': '4', 'descricao': '5º FÓRUM ABRAFATI DA INDUSTRIA DE TINTAS' },
    { 'id': '1', 'descricao': '7° FÓRUM ABRAFATI DA INDÚSTRIA DE TINTAS ' },
    { 'id': '33', 'descricao': '10º FÓRUM ABRAFATI 2015' },
    { 'id': '21', 'descricao': '9º FÓRUM ABRAFATI' },
    { 'id': '51', 'descricao': 'CHEMEXCIL 2016' },
    { 'id': '46', 'descricao': '11º FÓRUM ABRAFATI _ 2016' },
    { 'id': '86', 'descricao': '33 ANOS ABRAFATI &amp; LANÇAMENTO DA NOVA IDENTIDADE VISUAL' },
    { 'id': '60', 'descricao': 'AGOE' },
    { 'id': '43', 'descricao': 'JANTAR 30 ANOS ABRAFATI' },
    { 'id': '95', 'descricao': 'JANTAR INSTITUCIONAL 2017' },
    { 'id': '3', 'descricao': 'JANTAR INSTITUCIONAL 2012' },
    { 'id': '37', 'descricao': 'JANTAR INSTITUCIONAL 2015' },
    { 'id': '41', 'descricao': 'JANTAR INSTITUCIONAL 2015' },
    { 'id': '40', 'descricao': 'JANTAR INSTITUCIONAL 2014' },
    { 'id': '99', 'descricao': 'JANTAR INSTITUCIONAL 2018' },
    { 'id': '13', 'descricao': 'JANTAR INSTITUCIONAL 2013' },
    { 'id': '49', 'descricao': '17º PRÊMIO - 2016' },
    { 'id': '61', 'descricao': 'WEB CONFERENCE LATINPIN' },
    { 'id': '39', 'descricao': 'TESTE THIAGO' },
    { 'id': '71', 'descricao': 'BRIGADAS DE EMERGÊNCIA' },
    { 'id': '97', 'descricao': 'SEMINÁRIO PSQ' },
    { 'id': '89', 'descricao': 'SEMINÁRIO PNRS' },
    { 'id': '101', 'descricao': 'SEMINÁRIO TINTA DE QUALIDADE RECONHECIDA' }
  ];

  $scope.selecaoPreEvento = [
    { 'id': '1', 'descricao': 'CONFIRMOU' },
    { 'id': '2', 'descricao': 'DECLINOU' },
    { 'id': '3', 'descricao': 'PENDENTE' },
    { 'id': '4', 'descricao': 'SUBSTITUTO' }
  ];

  $scope.selecaoPosEvento = [
    { 'id': '1', 'descricao': 'AUSENTE' },
    { 'id': '3', 'descricao': 'PRESENTE' },
    { 'id': '4', 'descricao': 'ACOMPANHANTE' },
    { 'id': '5', 'descricao': 'AUSENTE JUSTIFICADO' }
  ];

  $timeout(function () {
    $('.select2').select2();

    $('#ddlEvento').val('63').trigger('change');
  }, 500);

  $scope.habilitaCampos = function () {
    return $scope.empresaContato == true ? true : false
  }

  $scope.pesquisarGrupo = function () {
    $('#tblComissoes').DataTable().destroy();

    if ($scope.empresaContato != undefined) {
      $scope.resultadoSelecao = true;

      $timeout(function () {
        $('#tblEvento').DataTable({
          language: {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
          }
        });
      }, 100);

      $timeout(function () {
        $('#tblEvento').parent('.col-sm-12').addClass('table-responsive');
      }, 1000);
    } else {
      alert('Selecione se o tipo é Empresa ou Contato');

      $scope.resultadoSelecao = false;
    }
  }
});