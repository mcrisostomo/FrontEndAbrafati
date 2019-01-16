app.controller('selecao-comite-controller', function ($rootScope, $location, $scope, $http, $timeout, httpService) {
  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.resultadoSelecao = false;

  $scope.selecaoGrupo = [
    { 'codigo': 'AB', 'descricao': 'ABRAFATI' },
    { 'codigo': 'ASFS', 'descricao': 'ASSOCIADOS FORNECEDORES - SECRETARIAS' },
    { 'codigo': 'DV', 'descricao': 'ASSOCIADOS FORNECEDORES - SUPLENTES' },
    { 'codigo': 'ASF', 'descricao': 'ASSOCIADOS FORNECEDORES - TITULARES' },
    { 'codigo': 'SO', 'descricao': 'ASSOCIADOS HONORÁRIOS' },
    { 'codigo': 'ALT', 'descricao': 'AUTORES DO LIVRO DE TINTAS' },
    { 'codigo': 'CPPP', 'descricao': 'COMISSÃO PROGRAMA PINTOR PROFISSIONAL' },
    { 'codigo': 'CT', 'descricao': 'COMISSÃO TÉCNICA ESPECIAL VOC' },
    { 'codigo': 'CC', 'descricao': 'COMITÊ CIENTÍFICO' },
    { 'codigo': 'JU', 'descricao': 'COMITÊ JURÍDICO RELAÇÕES GOVERNAMENTAIS' },
    { 'codigo': 'CST', 'descricao': 'COMITÊ SUSTENTABILIDADE - SECRETÁRIAS' },
    { 'codigo': 'CCT', 'descricao': 'CONSELHO CONSULTIVO - 2016/2018' },
    { 'codigo': 'CONSC', 'descricao': 'CONSELHO CONSULTIVO - 2018/2020	' },
    { 'codigo': 'CDIR', 'descricao': 'CONSELHO DIRETIVO 2018-2020 ' },
    { 'codigo': 'CDIRS', 'descricao': 'CONSELHO DIRETIVO SECRETÁRIAS 2018-2020' },
    { 'codigo': 'CF', 'descricao': 'CONSELHO FISCAL - 2016/2018' },
    { 'codigo': 'CF18', 'descricao': 'CONSELHO FISCAL 2018-2020' },
    { 'codigo': 'DC', 'descricao': 'DIRETORIA DE COMPRAS' },
    { 'codigo': 'EXPCD', 'descricao': 'EX DIRETORES E PRESIDENTES' },
    { 'codigo': 'FORN', 'descricao': 'FORNECEDORES ABRAFATI' },
    { 'codigo': 'F2017', 'descricao': 'FORNECEDORES ABRAFATI 2017' },
    { 'codigo': 'IPP', 'descricao': 'IPPIC' },
    { 'codigo': 'LAT', 'descricao': 'LATINPIN' },
    { 'codigo': 'LR17', 'descricao': 'LIVRO DE RÓTULOS 2017' },
    { 'codigo': 'PERS', 'descricao': 'PERSONALIDADES ABRAFATI' },
    { 'codigo': 'CMKT', 'descricao': 'PETIT COMITÊ MKT PSQ' },
    { 'codigo': 'PSE', 'descricao': 'PRESTADORES DE SERVIÇOS' },
    { 'codigo': 'PCT', 'descricao': 'PROFESSORES CURSO DE TINTAS' },
    { 'codigo': 'PCS', 'descricao': 'PSQ COMUNICAÇÃO - SUPLENTE' },
    { 'codigo': 'COM', 'descricao': 'PSQ COMUNICAÇÃO - TITULAR' },
    { 'codigo': 'PSF', 'descricao': 'PSQ FORNECEDORES' },
    { 'codigo': 'PGS', 'descricao': 'PSQ GESTORES - SUPLENTE' },
    { 'codigo': 'PSG', 'descricao': 'PSQ GESTORES - TITULAR' },
    { 'codigo': 'PTS', 'descricao': 'PSQ TÉCNICA - SUPLENTE' },
    { 'codigo': 'TEC', 'descricao': 'PSQ TÉCNICA - TITULAR' },
    { 'codigo': 'RH', 'descricao': 'RECURSOS HUMANOS' },
    { 'codigo': 'RPI', 'descricao': 'REPRESENTANTE INSTITUCIONAL' },
    { 'codigo': 'STT3', 'descricao': 'STAFF TERCEIRIZADO' },
    { 'codigo': 'SSI', 'descricao': 'SUBCOMITÊ DE SUSTENTABILIDADE E INOVAÇÃO' }
  ];

  $timeout(function () {
    $('.select2').select2();
  }, 500);

  $scope.pesquisarGrupo = function () {
    $('#tblComissoes').DataTable().destroy();

    if ($('.select2 :selected').val() != undefined) {
      $scope.resultadoSelecao = true;
      $scope.gruposSelecionados = $('.select2 :selected').toArray().map(item => item.text).join(', ');

      $timeout(function () {
        $('#tblComissoes').DataTable({
          language: {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
          }
        });
      }, 100);

      $timeout(function () {
        $('#tblComissoes').parent('.col-sm-12').addClass('table-responsive');
      }, 1000);
    } else {
      alert('Você deve selecionar pelo menos uma ou mais comissões da lista');
      $('.select2').focus();

      $scope.resultadoSelecao = false;
    }
  }
});