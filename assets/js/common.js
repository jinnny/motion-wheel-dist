function checkDevice () {
  var pathName = location.pathname
  if (navigator.userAgent.match(/iPhone|iPad|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|opera mobi|Windows Phone|IEMobile|POLARIS/) != null){
    location.href = "/m" + pathName;
  }
  var agent = navigator.userAgent.toLowerCase();
  if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)) {
    $('html').addClass('ie')
    $('html').removeClass('ie10 edge')
  } else if (agent.indexOf('msie') != -1 ) {
    $('html').removeClass('ie edge')
    $('html').addClass('ie10')
  } else if(agent.indexOf('edge') > -1) {
    $('html').removeClass('ie ie10')
    $('html').addClass('edge')
  }
}
if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
  window.location = 'microsoft-edge:' + window.location;
  setTimeout(function() {
    window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
  }, 1);
}
checkDevice()

$(function() {
  var width = $(window).width();

  $('.js-header-menu-button').on('click', function () {
    $(this).next('.js-header-menu-left').toggleClass('is--open');
  })
  $('.js-header-menu-close-button').on('click', function (){
    $(this).parents('.js-header-menu-left').removeClass('is--open');
  })

  $(window).scroll(function (){
    var scroll = $(document).scrollTop();
    if(scroll > 700) {
      $('.js-top-button').fadeIn()
    }else {
      $('.js-top-button').fadeOut()
    }
  })

  $('.js-top-button').on('click', function (){
    $('html, body').animate({
      scrollTop: '0'
    }, 800);
  })
});
