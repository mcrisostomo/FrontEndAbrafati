app.controller('listar-evento-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.tipoEvento = [];
  $scope.listaEventos = [];

  $scope.idEvento = '';
  $scope.nomeEvento = '';
  $scope.tipoEvento = '';
  $scope.localEvento = '';
  $scope.inicioEvento = '';
  $scope.fimEvento = '';
  $scope.descricaoEvento = '';
  $scope.eventoAtivo = '';

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

  $scope.listaEventos = [
    { 'id': 1, 'nome': 'evento teste 1', 'tipo': 'Tipo Teste 1', 'local': 'Abrafati', 'periodoInicio': '01/01/2019', 'periodoFim': '03/01/2019', 'descricao': 'Lorem ipsum dolor sit amet', 'ativo': 'S' },
    { 'id': 2, 'nome': 'evento teste 2', 'tipo': 'Tipo Teste 2', 'local': 'Abrafati', 'periodoInicio': '01/01/2019', 'periodoFim': '03/01/2019', 'descricao': 'Lorem ipsum dolor sit amet', 'ativo': 'N' },
    { 'id': 3, 'nome': 'evento teste 3', 'tipo': 'Tipo Teste 3', 'local': 'Abrafati', 'periodoInicio': '01/01/2019', 'periodoFim': '03/01/2019', 'descricao': 'Lorem ipsum dolor sit amet', 'ativo': 'N' },
    { 'id': 4, 'nome': 'evento teste 4', 'tipo': 'Tipo Teste 4', 'local': 'Abrafati', 'periodoInicio': '01/01/2019', 'periodoFim': '03/01/2019', 'descricao': 'Lorem ipsum dolor sit amet', 'ativo': 'S' },
    { 'id': 5, 'nome': 'evento teste 5', 'tipo': 'Tipo Teste 5', 'local': 'Abrafati', 'periodoInicio': '01/01/2019', 'periodoFim': '03/01/2019', 'descricao': 'Lorem ipsum dolor sit amet', 'ativo': 'S' }
  ];

  $timeout(function () {
    $('#tblListaEventos').DataTable({
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });
  }, 100);

  $('#dataInicio').datepicker({
    autoclose: true
  });

  $('#dataFim').datepicker({
    autoclose: true
  });

  $scope.editarEvento = function (id, nome, tipo, local, periodoInicio, periodoFim, descricao, ativo) {
    $scope.idEvento = id;
    $scope.nomeEvento = nome;
    $scope.tipoEvento = tipo;
    $scope.localEvento = local;
    $scope.inicioEvento = periodoInicio;
    $scope.fimEvento = periodoFim;
    $scope.descricaoEvento = descricao;
    $scope.eventoAtivo = ativo;
  }

  $scope.salvarTipo = function () {
    $('#modal-evento').modal('hide');
  }
});