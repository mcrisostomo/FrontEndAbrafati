app.controller('cadastro-nova-empresa-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.showAlertBox = false;
  $scope.alertMessage = '';

  $scope.tipoEmpresa = [];
  $scope.uploadLogo = '';
  $scope.razaoSocial = '';
  $scope.nomeFantasia = '';
  $scope.tipoGrupo = '';
  $scope.gruposEmpresa = [];
  $scope.outroGrupo = '';
  $scope.cep = '';
  $scope.classificacaoGrupo = [];
  $scope.tipoLogradouro = '';
  $scope.logradouro = '';
  $scope.ddi = '';
  $scope.numero = '';
  $scope.telefone1 = '';
  $scope.complemento = '';
  $scope.telefone2 = '';
  $scope.bairro = '';
  $scope.fax = '';
  $scope.cidade = '';
  $scope.internacional = [];
  $scope.uf = [];
  $scope.pais = '';
  $scope.site = '';
  $scope.coligada = [];
  $scope.observacao = '';
  $scope.ativo = [];
  $scope.motivoInativacao = [];
  $scope.dataInativacao = '';

  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  $scope.tipoEmpresa = [{
    'tipo': 'Fornecedor',
    'detalhe': [
      { 'id': 1, 'descricao': 'Solvente' },
      { 'id': 2, 'descricao': 'Embalagem' },
      { 'id': 3, 'descricao': 'Emulsão e Resina' },
      { 'id': 4, 'descricao': 'Pigmento' },
      { 'id': 5, 'descricao': 'Equipamento e Serviço' }
    ]
  }, {
    'tipo': 'Fabricante',
    'detalhe': [
      { 'id': 1, 'descricao': 'Industrial' },
      { 'id': 2, 'descricao': 'Automotivo' },
      { 'id': 3, 'descricao': 'Repintura' },
      { 'id': 4, 'descricao': 'Imobiliária' },
      { 'id': 5, 'descricao': 'Marítima' },
      { 'id': 6, 'descricao': 'Tinta em Pó' },
      { 'id': 7, 'descricao': 'Tinta para Madeira' },
      { 'id': 8, 'descricao': 'Tinta Artesanal' },
      { 'id': 9, 'descricao': 'Artística' },
      { 'id': 10, 'descricao': 'Impressão' }
    ]
  }];

  $timeout(function () {
    $('.select2').select2();
  }, 500);

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

  $scope.habilitaOutroGrupo = function () {
    if ($scope.tipoGrupo.tipoGrupo == 'OUTROS') {
      return false;
    } else {
      return true;
    }
  }

  $scope.buscaCep = function () {
    if ($scope.cep != '') {
      $http.get('https://viacep.com.br/ws/' + $scope.cep + '/json/').then(function (response) {
        $scope.tipoLogradouro = response.data.logradouro;
        $scope.logradouro = response.data.logradouro;
        $scope.bairro = response.data.bairro;
        $scope.cidade = response.data.localidade;
        //$scope.uf = response.data.uf;
      }, function (response) {
        alert('O cep digitado está incorreto ou não existe.')
        $scope.tipoLogradouro = '';
        $scope.logradouro = '';
        $scope.bairro = '';
        $scope.cidade = '';
        //$scope.uf = '';
      });
    }
  }

  $scope.habilitaClassificacao = function () {
    if ($scope.tipoGrupo.tipoGrupo == 'ASSOCIADOS FABRICANTES' || $scope.tipoGrupo.tipoGrupo == 'ASSOCIADOS FORNECEDORES' || $scope.tipoGrupo.tipoGrupo == 'ASSOCIADOS FABRICANTES/FORNECEDORES') {
      return false;
    } else {
      return true;
    }
  }

  $scope.classificacaoGrupo = [
    { 'id': 1, 'tipoClassificacao': 'Fundadores' },
    { 'id': 2, 'tipoClassificacao': 'Tradicionais' },
    { 'id': 3, 'tipoClassificacao': 'Especiais' }
  ];

  $scope.internacional = [
    { 'id': 1, 'opcao': 'Sim' },
    { 'id': 2, 'opcao': 'Não' },
  ];

  $scope.uf = [
    { 'id': 1, 'sigla': 'AC' },
    { 'id': 2, 'sigla': 'AL' },
    { 'id': 3, 'sigla': 'AM' },
    { 'id': 4, 'sigla': 'AP' },
    { 'id': 5, 'sigla': 'BA' },
    { 'id': 6, 'sigla': 'CE' },
    { 'id': 7, 'sigla': 'DF' },
    { 'id': 8, 'sigla': 'ES' },
    { 'id': 9, 'sigla': 'GO' },
    { 'id': 10, 'sigla': 'MA' },
    { 'id': 11, 'sigla': 'MG' },
    { 'id': 12, 'sigla': 'MS' },
    { 'id': 13, 'sigla': 'MT' },
    { 'id': 14, 'sigla': 'PA' },
    { 'id': 15, 'sigla': 'PB' },
    { 'id': 16, 'sigla': 'PE' },
    { 'id': 17, 'sigla': 'PI' },
    { 'id': 18, 'sigla': 'PR' },
    { 'id': 19, 'sigla': 'RJ' },
    { 'id': 20, 'sigla': 'RN' },
    { 'id': 21, 'sigla': 'RO' },
    { 'id': 22, 'sigla': 'RR' },
    { 'id': 23, 'sigla': 'RS' },
    { 'id': 24, 'sigla': 'SC' },
    { 'id': 25, 'sigla': 'SE' },
    { 'id': 26, 'sigla': 'SP' },
    { 'id': 27, 'sigla': 'TO' }
  ]

  $scope.coligada = [];

  $scope.ativo = [
    { 'id': 1, 'opcao': 'Sim' },
    { 'id': 2, 'opcao': 'Não' }
  ];

  $scope.motivoInativacao = [
    { 'id': 1, 'opcao': 'EX-ASSOCIADO' },
    { 'id': 1, 'opcao': 'EX-FORNECEDOR' },
    { 'id': 1, 'opcao': 'INDEFINIDO' }
  ];

  $('#datepickerInativacao').datepicker({
    autoclose: true
  });

  $scope.incluirNovaEmpresa = function () {
    // $scope.fornecedorEmpresa = [];
    // $scope.empresaFabricante = [];
    // $scope.razaoSocial = '';
    // $scope.nomeFantasia = '';
    // $scope.tipoGrupo = '';
    // $scope.gruposEmpresa = [];
    // $scope.outroGrupo = '';
    // $scope.cep = '';
    // $scope.classificacaoGrupo = [];
    // $scope.tipoLogradouro = '';
    // $scope.logradouro = '';
    // $scope.ddi = '';
    // $scope.numero = '';
    // $scope.telefone1 = '';
    // $scope.complemento = '';
    // $scope.telefone2 = '';
    // $scope.bairro = '';
    // $scope.fax = '';
    // $scope.cidade = '';
    // $scope.internacional = [];
    // $scope.uf = [];
    // $scope.pais = '';
    // $scope.site = '';
    // $scope.coligada = [];
    // $scope.observacao = '';
    // $scope.ativo = [];
    // $scope.motivoInativacao = [];
    // $scope.dataInativacao = '';
  }
});