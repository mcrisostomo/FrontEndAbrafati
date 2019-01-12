app.controller('index-controller', function ($rootScope, $location, $scope) {
  $('body').removeClass().addClass('skin-blue sidebar-mini');

  $('#header, #nav, #footer').css('display', 'block');

  var windowHeight = $(window).height();
  $('.content-wrapper').css('min-height', windowHeight - 142);

  window.location.href = '#/login'
});