app.controller('consulta-secretaria-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.resultadoSecretaria = false;

  $scope.exibeSecretaria = function () {
    if ($scope.buscaSecretaria != undefined) {
      $('#tblListaSecretarias').DataTable().destroy();

      $scope.resultadoSecretaria = true;

      $scope.pesquisaSecretarias = [
        { 'id': '1', 'secretaria': 'Alessandra Soares', 'contato': 'ANDERSON MAZINI MAZIERO', 'email': 'alessandra.soares@MAZA.COM.BR', 'ddd': '19', 'telefone': '3656-2570', 'dddCelular': '19', 'celular': '99226-0616' }
      ];

      $timeout(function () {
        $('#tblListaSecretarias').DataTable({
          language: {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
          }
        });
      }, 100);

      $timeout(function () {
        $('#tblListaSecretarias').parent('.col-sm-12').addClass('table-responsive');
      }, 1000);
    } else {
      alert('Você deve preencher o campo Secretaria.');
      $('#txtSecretaria').focus();
    }
  }

  $scope.filtroSecretaria = function () {
    $('#tblListaSecretarias').DataTable().destroy();

    $scope.resultadoSecretaria = true;

    $scope.pesquisaSecretarias = [
      { 'id': '1', 'secretaria': 'Alessandra Soares', 'contato': 'ANDERSON MAZINI MAZIERO', 'email': 'alessandra.soares@MAZA.COM.BR', 'ddd': '19', 'telefone': '3656-2570', 'dddCelular': '19', 'celular': '99226-0616' }
    ];

    $timeout(function () {
      $('#tblListaSecretarias').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $timeout(function () {
      $('#tblListaSecretarias').parent('.col-sm-12').addClass('table-responsive');
    }, 1000);
  }

  $scope.verSecretaria = function (id, secretaria) {
    $scope.modalSecretaria = 'Visualizando os dados da secretária ' + secretaria;

    $scope.pesquisaGruposTrabalhos = [
      { 'id': '1', 'idGrupo': 'PCT', 'empresa': 'BASF S.A.', 'grupos': 'PROFESSORES CURSO DE TINTAS', 'status': 'S' },
      { 'id': '2', 'idGrupo': 'PCT', 'empresa': 'BASF S.A.', 'grupos': 'PROFESSORES CURSO DE TINTAS', 'status': 'S' },
      { 'id': '3', 'idGrupo': 'PCT', 'empresa': 'BASF S.A.', 'grupos': 'PROFESSORES CURSO DE TINTAS', 'status': 'S' },
      { 'id': '4', 'idGrupo': 'PCT', 'empresa': 'BASF S.A.', 'grupos': 'PROFESSORES CURSO DE TINTAS', 'status': 'S' }
    ];

    $timeout(function () {
      $('#tblListaGruposTrabalhos').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.pesquisaEventosContato = [
      { 'id': '1', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' },
      { 'id': '2', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' },
      { 'id': '3', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' },
      { 'id': '4', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' }
    ];

    $timeout(function () {
      $('#tblListaEventosContato').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.pesquisaTeleMarketingContato = [
      { 'id': '1', 'data': '06/09/2018 15:49', 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'AGENDAMENTO', 'agendamento': '10/09/2018 13:30', 'finalizado': 'N', 'usuario': 'ALEXANDRE' },
      { 'id': '2', 'data': '06/09/2018 15:49', 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'AGENDAMENTO', 'agendamento': '10/09/2018 13:30', 'finalizado': 'N', 'usuario': 'ALEXANDRE' },
      { 'id': '3', 'data': '06/09/2018 15:49', 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'AGENDAMENTO', 'agendamento': '10/09/2018 13:30', 'finalizado': 'N', 'usuario': 'ALEXANDRE' }
    ];

    $timeout(function () {
      $('#tblListaTeleMarketingContato').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.pesquisaHistoricoContato = [
      { 'id': '1', 'data': '04/06/2012 17:00', 'tipo': 'EXPOSITORES - FEITINTAS', 'campanha': '' },
      { 'id': '2', 'data': '04/06/2012 17:00', 'tipo': 'EXPOSITORES - FEITINTAS', 'campanha': '' },
      { 'id': '3', 'data': '04/06/2012 17:00', 'tipo': 'EXPOSITORES - FEITINTAS', 'campanha': '' }
    ];

    $timeout(function () {
      $('#tblListaHistoricoContato').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $timeout(function () {
      $('#tblListaContatosContato').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaComissaoContato').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaEventosContato').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaTeleMarketingContato').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaHistoricoContato').parent('.col-sm-12').addClass('table-responsive');
    }, 1000);
  }

  $scope.novoEventoContato = function () {
    $scope.modalAdicionarEventoContato = 'Adicionar Evento';
  }

  $scope.editarEventoContato = function () {
    $scope.modalAdicionarEventoContato = 'Editar Evento';
  }

  $scope.novoTelemarketingContato = function () {
    $scope.modalAdicionarEventoContato = 'Adicionar Telemarketing'
  }

  $scope.editarTelemarketingContato = function () {
    $scope.modalAdicionarEventoContato = 'Editar Telemarketing'
  }

  $scope.novoHistoricoContato = function () {
    $scope.modalAdicionarHistoricoContato = 'Adicionar Histórico';
  }

  $scope.editarHistoricoContato = function () {
    $scope.modalAdicionarHistoricoContato = 'Editar Histórico';
  }

  // Fechamento de modais
  $scope.fecharModalContato = function () {
    $('#tblListaGruposTrabalhos').DataTable().destroy();
    $('#tblListaEventosContato').DataTable().destroy();
    $('#tblListaTeleMarketingContato').DataTable().destroy();
    $('#tblListaHistoricoContato').DataTable().destroy();
  }
});