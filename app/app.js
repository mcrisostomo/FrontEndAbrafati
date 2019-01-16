var app = angular.module('app', ['ngRoute','ngStorage','AppServices' ]);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/index.html',
      controller: 'index-controller'
    })

    .when('/login', {
      templateUrl: 'app/views/login.html',
      controller: 'login-controller'
    })

    .when('/forgot-password', {
      templateUrl: 'app/views/forgot-password.html',
      controller: 'forgot-password-controller'
    })

    .when('/register', {
      templateUrl: 'app/views/register.html',
      controller: 'register-controller'
    })

    .when('/home', {
      templateUrl: 'app/views/home.html',
      controller: 'home-controller'
    })

    .when('/empresa-grupos', {
      templateUrl: 'app/views/empresa-grupos.html',
      controller: 'empresa-grupos-controller'
    })
    
    .when('/selecao-comite', {
      templateUrl: 'app/views/selecao-comite.html',
      controller: 'selecao-comite-controller'
    })
    
    .when('/cadastro-nova-empresa', {
      templateUrl: 'app/views/cadastro-nova-empresa.html',
      controller: 'cadastro-nova-empresa-controller'
    })

    .when('/cadastro-novo-contato', {
      templateUrl: 'app/views/cadastro-novo-contato.html',
      controller: 'cadastro-novo-contato-controller'
    })
    
    .when('/novo-evento', {
      templateUrl: 'app/views/novo-evento.html',
      controller: 'novo-evento-controller'
    })

    .when('/listar-evento', {
      templateUrl: 'app/views/listar-evento.html',
      controller: 'listar-evento-controller'
    })

    .when('/buscar-evento', {
      templateUrl: 'app/views/buscar-evento.html',
      controller: 'buscar-evento-controller'
    })

    .when('/area', {
      templateUrl: 'app/views/area.html',
      controller: 'area-controller'
    })
    
    .when('/campanha', {
      templateUrl: 'app/views/campanha.html',
      controller: 'campanha-controller'
    })
    
    .when('/campanha-telemarketing', {
      templateUrl: 'app/views/campanha-telemarketing.html',
      controller: 'campanha-telemarketing-controller'
    })
    
    .when('/cargo', {
      templateUrl: 'app/views/cargo.html',
      controller: 'cargo-controller'
    })
    
    .when('/classificacao', {
      templateUrl: 'app/views/classificacao.html',
      controller: 'classificacao-controller'
    })
    
    .when('/coligada', {
      templateUrl: 'app/views/coligada.html',
      controller: 'coligada-controller'
    })
    
    .when('/comissao', {
      templateUrl: 'app/views/comissao.html',
      controller: 'comissao-controller'
    })

    .when('/departamento', {
      templateUrl: 'app/views/departamento.html',
      controller: 'departamento-controller'
    })
    
    .when('/grupos', {
      templateUrl: 'app/views/grupos.html',
      controller: 'grupos-controller'
    })
    
    .when('/motivo-inativacao-empresa', {
      templateUrl: 'app/views/motivo-inativacao-empresa.html',
      controller: 'motivo-inativacao-empresa-controller'
    })
    
    .when('/motivo-inativacao-contato', {
      templateUrl: 'app/views/motivo-inativacao-contato.html',
      controller: 'motivo-inativacao-contato-controller'
    })
    
    .when('/status-telemarketing', {
      templateUrl: 'app/views/status-telemarketing.html',
      controller: 'status-telemarketing-controller'
    })
    
    .when('/tipo-historico', {
      templateUrl: 'app/views/tipo-historico.html',
      controller: 'tipo-historico-controller'
    })

    .when('/tratamento', {
      templateUrl: 'app/views/tratamento.html',
      controller: 'tratamento-controller'
    })
    
    .when('/categoria-empresa', {
      templateUrl: 'app/views/categoria-empresa.html',
      controller: 'categoria-empresa-controller'
    })
    
    .when('/relatorio', {
      templateUrl: 'app/views/relatorio.html',
      controller: 'relatorio-controller'
    })
    
    .when('/cadastro-usuario', {
      templateUrl: 'app/views/cadastro-usuario.html',
      controller: 'cadastro-usuario-controller'
    })
    
    .when('/alterar-senha', {
      templateUrl: 'app/views/alterar-senha.html',
      controller: 'alterar-senha-controller'
    })

    .when('/manutencao-consultas', {
      templateUrl: 'app/views/manutencao-consultas.html',
      controller: 'manutencao-consultas-controller'
    })

    .when('/proximo-telemarketing', {
      templateUrl: 'app/views/proximo-telemarketing.html',
      controller: 'proximo-telemarketing-controller'
    })

    .otherwise('/');

  $locationProvider.hashPrefix('');
});