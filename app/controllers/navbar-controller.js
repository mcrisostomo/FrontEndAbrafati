app.controller('navbar-controller', function ($rootScope, $location, $scope, $timeout) {
  $scope.menuOpenGrupos = false;
  $scope.menuOpenComites = false;
  $scope.menuOpenCadastro = false;
  $scope.menuOpenEventos = false;
  $scope.menuOpenTabelas = false;

  $scope.alturaSubMenu = function () {
    var windowHeight = $(window).height();
    var subMenuHeight = $('.treeview.menu-open').height();
    if (subMenuHeight) {
      $('.content-wrapper').css('min-height', windowHeight + (subMenuHeight / 2));
    } else {
      $('.content-wrapper').css('min-height', windowHeight - 142);
    }
  }

  $scope.treeviewGrupos = function () {
    if (!$scope.menuOpenGrupos) {
      $scope.menuOpenGrupos = !$scope.menuOpenGrupos;
      $scope.menuOpenComites = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenEventos = false;
      $scope.menuOpenTabelas = false;
    } else {
      $scope.menuOpenGrupos = !$scope.menuOpenGrupos;
      $scope.menuOpenComites = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenEventos = false;
      $scope.menuOpenTabelas = false;
    }

    $timeout(function () {
      $scope.alturaSubMenu();
    }, 100);
  }

  $scope.treeviewComites = function () {
    if (!$scope.menuOpenComites) {
      $scope.menuOpenComites = !$scope.menuOpenComites;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenEventos = false;
      $scope.menuOpenTabelas = false;
    } else {
      $scope.menuOpenComites = !$scope.menuOpenComites;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenEventos = false;
      $scope.menuOpenTabelas = false;
    }

    $timeout(function () {
      $scope.alturaSubMenu();
    }, 100);
  }

  $scope.treeviewCadastro = function () {
    if (!$scope.menuOpenCadastro) {
      $scope.menuOpenCadastro = !$scope.menuOpenCadastro;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenComites = false;
      $scope.menuOpenEventos = false;
      $scope.menuOpenTabelas = false;
    } else {
      $scope.menuOpenCadastro = !$scope.menuOpenCadastro;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenComites = false;
      $scope.menuOpenEventos = false;
      $scope.menuOpenTabelas = false;
    }

    $timeout(function () {
      $scope.alturaSubMenu();
    }, 100);
  }

  $scope.treeviewEventos = function () {
    if (!$scope.menuOpenEventos) {
      $scope.menuOpenEventos = !$scope.menuOpenEventos;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenComites = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenTabelas = false;
    } else {
      $scope.menuOpenEventos = !$scope.menuOpenEventos;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenComites = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenTabelas = false;
    }

    $timeout(function () {
      $scope.alturaSubMenu();
    }, 100);
  }

  $scope.treeviewTabelas = function () {
    if (!$scope.menuOpenTabelas) {
      $scope.menuOpenTabelas = !$scope.menuOpenTabelas;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenComites = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenEventos = false;
    } else {
      $scope.menuOpenTabelas = !$scope.menuOpenTabelas;
      $scope.menuOpenGrupos = false;
      $scope.menuOpenComites = false;
      $scope.menuOpenCadastro = false;
      $scope.menuOpenEventos = false;
    }

    $timeout(function () {
      $scope.alturaSubMenu();
    }, 100);
  }
  // $scope.hasSubMenu = function (e) {
  //   $scope.subMenuClass = 'treeview menu-open';
  //   if ($('li').is('.treeview-menu') && $this.parent("li").is('.treeview')) {
  //     // e.preventDefault();
  //     alert('ok')
  //   }
  // };
});