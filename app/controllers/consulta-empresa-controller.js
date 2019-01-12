app.controller('consulta-empresa-controller', function ($rootScope, $location, $scope, $http, $timeout) {
  $scope.resultadoEmpresa = false;

  $scope.pesquisaEmpresas = [];
  $scope.pesquisaContatos = [];
  $scope.pesquisaComissao = [];
  $scope.pesquisaEventos = [];
  $scope.pesquisaTeleMKT = [];
  $scope.pesquisaHistorico = [];

  $scope.pesquisaGruposTrabalhos = [];

  $scope.exibeEmpresa = function () {
    if ($scope.buscaEmpresa != undefined) {
      $('#tblListaEmpresas').DataTable().destroy();

      $scope.resultadoEmpresa = true;

      $scope.pesquisaEmpresas = [
        { 'id': '61', 'razaoSocial': 'basf s/a', 'nomeFantasia': 'basf s.a.', 'grupo': 'ASSOCIADOS FABRICANTES/FORNECEDORES', 'classificacao': '', 'cnpj': '48.539.407/0001-18', 'site': 'https://www.basf.com/br/pt.html', 'cidade': 'são paulo', 'pais': '', 'uf': 'sp', 'internacional': '' }
      ];

      $timeout(function () {
        $('#tblListaEmpresas').DataTable({
          language: {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
          }
        });
      }, 100);

      $timeout(function () {
        $('#tblListaEmpresas').parent('.col-sm-12').addClass('table-responsive');
      }, 1000);
    } else {
      alert('Você deve preencher o campo Empresa.');
      $('#txtEmpresa').focus();
    }
  }

  $scope.filtroEmpresa = function () {
    $('#tblListaEmpresas').DataTable().destroy();

    $scope.resultadoEmpresa = true;

    $scope.pesquisaEmpresas = [
      { 'id': '61', 'razaoSocial': 'basf s/a', 'nomeFantasia': 'basf s.a.', 'grupo': 'ASSOCIADOS FABRICANTES/FORNECEDORES', 'classificacao': '', 'cnpj': '48.539.407/0001-18', 'site': 'https://www.basf.com/br/pt.html', 'cidade': 'são paulo', 'pais': '', 'uf': 'sp', 'internacional': '' }
    ];

    $timeout(function () {
      $('#tblListaEmpresas').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $timeout(function () {
      $('#tblListaEmpresas').parent('.col-sm-12').addClass('table-responsive');
    }, 1000);
  }

  $scope.verEmpresa = function (id) {
    $scope.detalheEmpresa = [{
      'id': '1',
      'idEmpresa': id,
      'razaoSocial': 'basf s/a',
      'nomeFantasia': 'basf s.a.',
      'grupo': 'ASSOCIADOS FABRICANTES/FORNECEDORES',
      'categoria': [
        { 'tipoCategoria': 'Fornecedor' },
        { 'tipoCategoria': 'Fabricante' }
      ],
      'classificacao': 'FUNDADORES',
      'cnpj': '48.539.407/0001-18',
      'segmento': [
        { 'tipoSegmento': 'Solvente' },
        { 'tipoSegmento': 'Industrial' },
        { 'tipoSegmento': 'Tinta em Pó' }
      ],
      'ddi': '55',
      'ddd1': '11',
      'telefone1': '2039-2273',
      'ddd2': '',
      'telefone2': '',
      'dddFax': '',
      'fax': '',
      'ativo': 'Sim',
      'endereco': 'AV DAS NACOES UNIDAS, 14171',
      'comlemento': '11',
      'bairro': 'VILA GERTRUDES',
      'site': 'https://www.basf.com/br/pt.html',
      'cidade': 'são paulo',
      'cep': '04794000',
      'pais': '',
      'uf': 'sp',
      'internacional': 'não',
      'dataCadastro': '29/11/2011 13:45',
      'dataAlteracao': '09/10/2017 10:44',
      'observacao': 'EMPRESA TAMBÉM CLASSIFICADA COMO TRADICIONAIS'
    }];

    $scope.tituloModal = 'Dados da Empresa';

    var detalhe = $scope.detalheEmpresa[0];

    $scope.detalheIdEmpresa = detalhe.idEmpresa;
    $scope.detalheRazaoSocial = detalhe.razaoSocial;
    $scope.detalheNomeFantasia = detalhe.nomeFantasia;
    $scope.detalheGrupo = detalhe.grupo;
    $scope.detalheClassificacao = detalhe.classificacao;
    $scope.detalheCNPJ = detalhe.cnpj;
    $scope.detalheDDI = detalhe.ddi;
    $scope.detalheTelefone1 = detalhe.ddd1 + ' ' + detalhe.telefone1;
    $scope.detalheTelefone2 = detalhe.ddd2 + ' ' + detalhe.telefone2;
    $scope.detalheFax = detalhe.dddFax + ' ' + detalhe.fax;
    $scope.detalheInternacional = detalhe.internacional;
    $scope.detalheAtivo = detalhe.ativo;
    $scope.detalheEndereco = detalhe.endereco + ' - ' + detalhe.comlemento + ' - ' + detalhe.bairro + ' - ' + detalhe.cidade + ' - ' + detalhe.uf + ' - CEP: ' + detalhe.cep;
    $scope.detalheSite = detalhe.site;
    $scope.detalheDataCadastro = detalhe.dataCadastro;
    $scope.detalheDataAlteracao = detalhe.dataAlteracao;
    $scope.detalheObservacao = detalhe.observacao;

    $scope.pesquisaContatos = [
      { 'id': '1', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' },
      { 'id': '2', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' },
      { 'id': '3', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' },
      { 'id': '4', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' },
      { 'id': '5', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' },
      { 'id': '6', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' },
      { 'id': '7', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' },
      { 'id': '8', 'nome': 'AGUSTÍN SÁNCHEZ VALDIVIA', 'cargo': 'VICE-PRESIDENTE', 'area': 'DIRETORIA', 'titulo': 'DIRETOR CARE CHEMICALS', 'status': 'S' }
    ];

    $timeout(function () {
      $('#tblListaContatos').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.pesquisaComissao = [
      { 'id': '1', 'codigo': 'PCT', 'comissao': 'PROFESSORES CURSO DE TINTAS', 'contato': 'ANA CRISTINA INÁCIO DE SOUZA' },
      { 'id': '2', 'codigo': 'PCT', 'comissao': 'PROFESSORES CURSO DE TINTAS', 'contato': 'ANA CRISTINA INÁCIO DE SOUZA' },
      { 'id': '3', 'codigo': 'PCT', 'comissao': 'PROFESSORES CURSO DE TINTAS', 'contato': 'ANA CRISTINA INÁCIO DE SOUZA' },
      { 'id': '4', 'codigo': 'PCT', 'comissao': 'PROFESSORES CURSO DE TINTAS', 'contato': 'ANA CRISTINA INÁCIO DE SOUZA' },
      { 'id': '5', 'codigo': 'PCT', 'comissao': 'PROFESSORES CURSO DE TINTAS', 'contato': 'ANA CRISTINA INÁCIO DE SOUZA' }
    ];

    $timeout(function () {
      $('#tblListaComissao').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.pesquisaEventos = [
      { 'id': '1', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' },
      { 'id': '2', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' },
      { 'id': '3', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' },
      { 'id': '4', 'evento': 'ABRAFATI 2013', 'categoria': 'EXPOSITORA', 'subCategoria': 'INDEFINIDO', 'setor': 'rua 3/g/4', 'm2': '210', 'pavilhao': '', 'mesVenda': '' }
    ];

    $timeout(function () {
      $('#tblListaEventos').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.pesquisaTeleMKT = [
      { 'id': '1', 'data': '06/09/2018 15:49', 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'AGENDAMENTO', 'agendamento': '10/09/2018 13:30', 'finalizado': 'N', 'usuario': 'ALEXANDRE' },
      { 'id': '2', 'data': '06/09/2018 15:49', 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'AGENDAMENTO', 'agendamento': '10/09/2018 13:30', 'finalizado': 'N', 'usuario': 'ALEXANDRE' },
      { 'id': '3', 'data': '06/09/2018 15:49', 'campanha': 'CONGRESSO E EXPOSIÇÃO', 'status': 'AGENDAMENTO', 'agendamento': '10/09/2018 13:30', 'finalizado': 'N', 'usuario': 'ALEXANDRE' }
    ];

    $timeout(function () {
      $('#tblListaTeleMKT').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.pesquisaHistorico = [
      { 'id': '1', 'data': '04/06/2012 17:00', 'tipo': 'EXPOSITORES - FEITINTAS', 'campanha': '' },
      { 'id': '2', 'data': '04/06/2012 17:00', 'tipo': 'EXPOSITORES - FEITINTAS', 'campanha': '' },
      { 'id': '3', 'data': '04/06/2012 17:00', 'tipo': 'EXPOSITORES - FEITINTAS', 'campanha': '' }
    ];

    $timeout(function () {
      $('#tblListaHistorico').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $timeout(function () {
      $('#tblListaContatos').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaComissao').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaEventos').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaTeleMKT').parent('.col-sm-12').addClass('table-responsive');
      $('#tblListaHistorico').parent('.col-sm-12').addClass('table-responsive');
    }, 1000);
  }

  $scope.editarEmpresa = function (id) {
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
  }

  $scope.adicionarContato = function () {
    $scope.modalContato = 'Adicionar Contato';

    $scope.edicaoContato = function () {
      return false;
    };
  }

  $scope.editarContato = function (id) {
    $scope.modalContato = 'Editar Contato';

    $scope.edicaoContato = function () {
      return true;
    };

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

    $scope.idGrupoTrabalho = id;

    $timeout(function () {
      $('#tblListaEventosContato').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $scope.adicionarEventoContato = function () {
      $scope.modalAdicionarEventoContato = 'Adicionar Evento';
    }

    $scope.editarEventoContato = function (id) {
      $scope.modalAdicionarEventoContato = 'Editar Evento';
    }

    $scope.excluirEventoContato = function (id) {
      $scope.idEvento = id;
    }

    $timeout(function () {
      $('#tblListaTeleMarketingContato').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);

    $timeout(function () {
      $('#tblListaHistoricoContato').DataTable({
        language: {
          "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
      });
    }, 100);
  }

  $scope.verComissao = function (id) {
    $scope.modalContato = 'Dados do Contato'

    $scope.edicaoContato = function () {
      return true;
    };
  }

  $scope.adicionarEvento = function () {
    $scope.modalAdicionarEvento = 'Adicionar Evento';
  }

  $scope.editarEvento = function (id) {
    $scope.modalAdicionarEvento = 'Editar Evento';
  }

  $scope.adicionarTeleMKT = function () {
    $scope.modalAdicionarTeleMarketing = 'Adicionar Telemarketing';
  }

  $scope.editarTeleMKT = function () {
    $scope.modalAdicionarTeleMarketing = 'Editar Telemarketing';
  }

  $scope.adicionarHistorico = function () {
    $scope.modalAdicionarHistoricoContato = 'Adicionar Histórico';
  }

  $scope.editarHistorico = function (id) {
    $scope.modalAdicionarHistoricoContato = 'Editar Histórico';
  }

  // Fechamento de modais
  $scope.fecharModalEmpresa = function () {
    $('#tblListaContatos').DataTable().destroy();
    $('#tblListaComissao').DataTable().destroy();
    $('#tblListaEventos').DataTable().destroy();
    $('#tblListaTeleMKT').DataTable().destroy();
    $('#tblListaHistorico').DataTable().destroy();
  }

  $scope.fecharModalContato = function () {
    if($scope.edicaoContato()) {
      $('#tblListaGruposTrabalhos').DataTable().destroy();
      $('#tblListaEventosContato').DataTable().destroy();
      $('#tblListaTeleMarketingContato').DataTable().destroy();
      $('#tblListaHistoricoContato').DataTable().destroy();
    }
  }
});