var $menuShow = !1, $imagesLoaded = !1, $imgGlobalID = 0, $scrollPos = 0, $updateReady = !0, $lastPosX = 0, $lastPosY = 0, $isSafari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1, windowWidth, windowHeight;
(function(a) {
    a(function() {
      windowWidth = a(window).width(),
        windowHeight = a(window).height(),
        a(document).ready(function() {
          var g, f, d;
          VANTA.FOG({
            el: "#vMasseria",
            mouseControls: !0,
            touchControls: !0,
            gyroControls: !1,
            minHeight: 200,
            minWidth: 200,
            highlightColor: 83810,
            midtoneColor: 406858,
            lowlightColor: 83810,
            baseColor: 406858,
            blurFactor: .725,
            speed: 5,
            zoom: 1.5
          }),
            VANTA.FOG({
              el: "#vRistorante",
              mouseControls: !0,
              touchControls: !0,
              gyroControls: !1,
              minHeight: 200,
              minWidth: 200,
              highlightColor: 6847857,
              midtoneColor: 5069140,
              lowlightColor: 6847857,
              baseColor: 5069140,
              blurFactor: .725,
              speed: 5,
              zoom: 1.5
            }),
            g = new Glide('.glideSlider',{
              gap: isMobile ? 25 : 50,
              type: 'carousel',
              autoplay: !1,
              perView: isMobile ? 1 : 3,
              animationDuration: 500,
              animationTimingFunc: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
              rewind: !0
            }).mount(),
          $isSafari && a('html').addClass('is-safari-osx'),
          isTouchEnabled && (a('body').height(windowHeight),
            isMobile),
          isMobile && (a('#pMasseria, #pRistorante').attr('data-scroll-offset', '25%'),
            a('#homeRooms .pic.rect').attr('data-scroll-offset', '0'),
            a('#masseriaScroller .scrollBlock img, #ristoranteScroller .scrollBlock img').attr('data-scroll', '').attr('data-scroll-speed', '-1'),
            a('#mapLayer .text').each(function(b) {
              a('#mapLayer .text:eq(' + b + ')').attr('data-scroll', '').attr('data-scroll-repeat', ''),
                a('#mapLayer .text:eq(' + b + ') span').addClass('d' + b * 100)
            }),
            a('#salentoPuglia, .pugliaPayContainer, .pugliaVideo').attr('data-scroll', '').attr('data-scroll-repeat', ''),
            a('#videoPorto')[0].play(),
            a('#videoPorto2')[0].play(),
            a('#menuController').on('click', function(a) {
              c()
            }));
          function c() {
            a('header').hasClass('open') ? (a('header').removeClass('open'),
              a('#barBackground').removeClass('full'),
              a('header .barLeft').removeClass('show'),
              a('header .barRight').removeClass('show')) : (a('header').addClass('open'),
              a('#barBackground').addClass('full'),
              a('header .barLeft').addClass('show'),
              setTimeout(function() {
                a('header .barRight').addClass('show')
              }, 300))
          }
          scrollLayer = new LocomotiveScroll({
            el: document.querySelector('article'),
            smooth: !0,
            getDirection: !0,
            lerp: isMobile ? .1 : .06,
            scrollFromAnywhere: !1,
            touchMultiplier: 2.5,
            class: 'show',
            smartphone: {
              smooth: !0
            },
            tablet: {
              smooth: !0
            },
            direction: 'vertical'
          }),
            $galleryLocking = !1,
            $scrollLock = !1,
            scrollLayer.on('scroll', b => {
                f = b.direction,
                  $scrollPos = b.scroll.y,
                $scrollPos > 50 && a('.leadingLogo').addClass('show'),
                $scrollPos < 50 && a('.leadingLogo').removeClass('show'),
                $scrollPos < 300 && (a('header').removeClass('visible'),
                  isMobile ? a('header .barCenter, #barBackground, #menuController, #rightSubMenu').removeClass('show') : a('header .barLeft, header .barCenter, header .barRight, #barBackground,  #menuController').removeClass('show')),
                $scrollPos > 300 && (a('header').addClass('visible'),
                  isMobile ? a('header .barCenter, #barBackground, #menuController,  #rightSubMenu').addClass('show') : a('header .barLeft, header .barCenter, header .barRight, #barBackground, #menuController').addClass('show')),
                typeof b.currentElements.wheelContainer == "object" && (progress = b.currentElements.wheelContainer.progress,
                progress < .2 && a('#homeWheel .title').removeClass('show'),
                  a('#wheel').css('transform', 'rotateZ(' + 90 * progress + 'deg)')),
                typeof b.currentElements.masseriaTarget == "object" && !isMobile && (progress = b.currentElements.masseriaTarget.progress,
                progress < .1 && a('#masseriaRel').hasClass('active') && a('#mainBar .button').removeClass('active'),
                progress > .1 && !a('#masseriaRel').hasClass('active') && (a('#mainBar .button').removeClass('active'),
                  a('#masseriaRel').addClass('active')),
                progress < .3 && (a('#masseriaScroller .scrollBlock._2').css('transform', 'translateX(0%)'),
                  a('#masseriaScroller .scrollBlock._3').css('transform', 'translateX(100%)')),
                progress < .2 && (a('#masseriaScroller .scrollBlock._1 > .left img').css('transform', 'translateY(' + (-25 + 25 * progress * 5) + '%)'),
                  a('#masseriaScroller .scrollBlock._1, #masseriaScroller .scrollBlock._1 > .left').css('transform', 'translateX(0%)')),
                progress > .2 && a('#masseriaScroller .scrollBlock._1 > .left img').css('transform', 'translateY(0)'),
                progress > .2 && progress < .4 && a('#masseriaScroller .scrollBlock._2 .text').css('transform', 'translateY(' + (50 - 50 * ((progress - .2) * 5)) + '%)'),
                progress > .2 && progress < .3 && (a('#masseriaScroller .scrollBlock._2 .text').css('opacity', (progress - .2) * 10),
                  a('#masseriaScroller .scrollBlock._2 .veil').css('opacity', (progress - .2) * 5)),
                progress > .2 && progress < .6 && (a('#masseriaScroller .scrollBlock._1 > .left').css('transform', 'translateX(' + 75 * ((progress - .2) * 2.5) + '%)'),
                  a('#masseriaScroller .scrollBlock._2 .pic').css('transform', 'translateX(' + (25 - 25 * ((progress - .2) * 2.5)) + '%)'),
                  a('#masseriaScroller .scrollBlock._1').css('transform', 'translateX(-' + 100 * ((progress - .2) * 2.5) + '%)')),
                progress > .4 && progress < .6 && a('#masseriaScroller .scrollBlock._2 .text').css('transform', 'translateY(' + -(50 * ((progress - .4) * 5)) + '%)'),
                progress > .5 && progress < .6 && (a('#masseriaScroller .scrollBlock._2 .text').css('opacity', 1 - (progress - .5) * 10),
                  a('#masseriaScroller .scrollBlock._2 .veil').css('opacity', .5 - (progress - .5) * 5),
                  a('#masseriaScroller .scrollBlock._3 .text').css('opacity', 0)),
                progress < .6 && (a('#pMasseria').addClass('show'),
                  a('#masseriaScroller .scrollBlock._2').css('transform', 'translateX(0)'),
                  a('#masseriaScroller .scrollBlock._3').css('transform', 'translateX(100%)')),
                progress > .6 && progress < 1 && (a('#masseriaScroller .scrollBlock._1').css('transform', 'translateX(-100%)'),
                  a('#masseriaScroller .scrollBlock._2 .pic').css('transform', 'translateX(' + 75 * ((progress - .6) * 2.5) + '%)'),
                  a('#masseriaScroller .scrollBlock._2').css('transform', 'translateX(-' + 100 * ((progress - .6) * 2.5) + '%)'),
                  a('#masseriaScroller .scrollBlock._3').css('transform', 'translateX(' + (100 - 100 * ((progress - .6) * 2.5)) + '%)'),
                  a('#masseriaScroller .scrollBlock._3 .pic').css('transform', 'translateX(' + (-75 + 75 * ((progress - .6) * 2.5)) + '%)')),
                progress > .65 && progress < .75 && a('#masseriaScroller .scrollBlock._3 .text').css('opacity', (progress - .65) * 10)),
                typeof b.currentElements.ristoranteTarget == "object" && !isMobile && (progress = b.currentElements.ristoranteTarget.progress,
                progress < .1 && a('#diningRel').hasClass('active') && (a('#mainBar .button').removeClass('active'),
                  a('#posizioneRel').addClass('active')),
                progress > .1 && !a('#diningRel').hasClass('active') && (a('#mainBar .button').removeClass('active'),
                  a('#diningRel').addClass('active')),
                progress < .2 && (a('#ristoranteScroller .scrollBlock._1 > .left img').css('transform', 'translateY(' + (-25 + 25 * progress * 5) + '%)'),
                  a('#ristoranteScroller .scrollBlock._1, #ristoranteScroller .scrollBlock._1 > .left').css('transform', 'translateX(0%)')),
                progress > .2 && a('#ristoranteScroller .scrollBlock._1 > .left img').css('transform', 'translateY(0)'),
                progress > .2 && progress < .4 && a('#ristoranteScroller .scrollBlock._2 .text').css('transform', 'translateY(' + (50 - 50 * ((progress - .2) * 5)) + '%)'),
                progress > .2 && progress < .3 && (a('#ristoranteScroller .scrollBlock._2 .veil').css('opacity', (progress - .2) * 5),
                  a('#ristoranteScroller .scrollBlock._2 .text').css('opacity', (progress - .2) * 10)),
                progress > .2 && progress < .6 && (a('#ristoranteScroller .scrollBlock._1 > .left').css('transform', 'translateX(' + 75 * ((progress - .2) * 2.5) + '%)'),
                  a('#ristoranteScroller .scrollBlock._2 .pic').css('transform', 'translateX(' + (25 - 25 * ((progress - .2) * 2.5)) + '%)'),
                  a('#ristoranteScroller .scrollBlock._1').css('transform', 'translateX(-' + 100 * ((progress - .2) * 2.5) + '%)')),
                progress > .4 && progress < .6 && a('#ristoranteScroller .scrollBlock._2 .text').css('transform', 'translateY(' + -(50 * ((progress - .4) * 5)) + '%)'),
                progress > .5 && progress < .6 && (a('#ristoranteScroller .scrollBlock._2 .text').css('opacity', 1 - (progress - .5) * 10),
                  a('#ristoranteScroller .scrollBlock._3 .text').css('opacity', 0),
                  a('#ristoranteScroller .scrollBlock._2 .veil').css('opacity', .5 - (progress - .5) * 5)),
                progress < .6 && (a('#pRistorante').addClass('show'),
                  a('#homeCulture .row').addClass('show'),
                  a('#ristoranteScroller .scrollBlock._2').css('transform', 'translateX(0)'),
                  a('#ristoranteScroller .scrollBlock._3').css('transform', 'translateX(100%)')),
                progress > .6 && progress < 1 && (a('#ristoranteScroller .scrollBlock._1').css('transform', 'translateX(-100%)'),
                  a('#ristoranteScroller .scrollBlock._2 .pic').css('transform', 'translateX(' + 75 * ((progress - .6) * 2.5) + '%)'),
                  a('#ristoranteScroller .scrollBlock._2').css('transform', 'translateX(-' + 100 * ((progress - .6) * 2.5) + '%)'),
                  a('#ristoranteScroller .scrollBlock._3').css('transform', 'translateX(' + (100 - 100 * ((progress - .6) * 2.5)) + '%)'),
                  a('#ristoranteScroller .scrollBlock._3 .pic').css('transform', 'translateX(' + (-75 + 75 * ((progress - .6) * 2.5)) + '%)')),
                progress > .7 && progress < .8 && a('#ristoranteScroller .scrollBlock._3 .text').css('opacity', (progress - .7) * 10)),
                typeof b.currentElements.mapTarget == "object" && !isMobile && (progress = b.currentElements.mapTarget.progress,
                progress < .01 && a('#mapBackground, #mapSvg').removeClass('show'),
                progress > .01 && a('#mapBackground, #mapSvg').addClass('show'),
                progress < .025 && (a('#mainBar .button').removeClass('active'),
                  a('#posizioneRel').removeClass('active'),
                  a('#mapLayer ._1').removeClass('show'),
                  a('#camereRel').addClass('active')),
                progress > .025 && (a('#mapLayer ._1').addClass('show'),
                  a('#mainBar .button').removeClass('active'),
                  a('#posizioneRel').addClass('active')),
                progress < .04 && a('#mapLayer ._2').removeClass('show'),
                progress > .04 && a('#mapLayer ._2').addClass('show'),
                progress < .055 && a('#mapLayer ._3').removeClass('show'),
                progress > .055 && a('#mapLayer ._3').addClass('show'),
                progress < .07 && (a('#mapLayer ._4').removeClass('show'),
                  a('#salentoPuglia').removeClass('show')),
                progress > .07 && (a('#mapLayer ._4').addClass('show'),
                  a('#salentoPuglia').addClass('show')),
                progress < .08 && a('#mapLayer ._5').removeClass('show'),
                progress > .08 && a('#mapLayer ._5').addClass('show'),
                progress < .09 && a('#mapLayer ._6').removeClass('show'),
                progress > .09 && a('#mapLayer ._6').addClass('show'),
                progress < .1 && a('#mapLayer ._7').removeClass('show'),
                progress > .1 && a('#mapLayer ._7').addClass('show'),
                progress < .125 && a('#mapLayer ._8').removeClass('show'),
                progress > .125 && a('#mapLayer ._8').addClass('show'),
                progress < .11 && a('#mapLayer ._9').removeClass('show'),
                progress > .11 && a('#mapLayer ._9').addClass('show'),
                progress < .2 && (a('#mapBackground').addClass('translated'),
                  a('#mapLayer .show').addClass('show'),
                  a('#mapContainer').css('transform', 'translateX(0)'),
                  a('#mapScroller .scrollBlock._1').css('transform', 'translateX(0)'),
                  a('#salentoPuglia').css('transform', 'translateX(0)')),
                progress > .2 && (a('#mapLayer .show').removeClass('show'),
                  a('#mapBackground').removeClass('translated')),
                progress > .2 && progress < .4 && (a('#mapContainer').css('transform', 'translateX(' + 75 * ((progress - .2) * 5) + '%)'),
                  a('#mapScroller .scrollBlock._1').css('transform', 'translateX(-' + 100 * ((progress - .2) * 5) + '%)'),
                  a('#salentoPuglia').css('transform', 'translateX(-' + 75 * ((progress - .2) * 5) + 'vw)')),
                progress > .4 && (a('#mapContainer').css('transform', 'translateX(75%)'),
                  a('#mapScroller .scrollBlock._1').css('transform', 'translateX(-100%)')),
                progress < .3 && a('#mapScroller .scrollBlock._2 .pugliaPay .row, #mapScroller .scrollBlock._3 .pugliaPay .row').removeClass('show'),
                progress > .3 && progress < .5 && (a('#mapScroller .scrollBlock._2 .pugliaPay .row._1').addClass('show'),
                  a('#mapScroller .scrollBlock._2 .pugliaPay .row._1').css('transform', 'translateX(' + (117.5 - 117.5 * ((progress - .3) * 5)) + '%)'),
                  a('#mapScroller .scrollBlock._2 .pugliaPay .row._2').addClass('show'),
                  a('#mapScroller .scrollBlock._2 .pugliaPay .row._2').css('transform', 'translateX(' + (117.5 - 117.5 * ((progress - .3) * 5)) + '%)')),
                progress < .5 && (a('#mapScroller .scrollBlock._2 .pugliaVideo').css('transform', 'scale(0)'),
                  document.getElementById('videoPorto').pause(),
                  document.getElementById('videoPorto').currentTime = 0),
                progress > .5 && progress < .625 && a('#mapScroller .scrollBlock._2 .pugliaVideo').css('transform', 'scale(' + (progress - .5) * 8 + ')'),
                progress < .52 && a('#mapScroller .scrollBlock._2 .pugliaVideo').removeClass('show'),
                progress > .52 && (document.getElementById('videoPorto').play(),
                  a('#mapScroller .scrollBlock._2 .pugliaVideo').addClass('show')),
                progress < .65 && (a('#mapScroller .scrollBlock._2 .pugliaPay').show(),
                  a('#mapScroller .scrollBlock._2').css('transform', 'translateX(0)')),
                progress > .65 && progress < .9 && (a('#mapScroller .scrollBlock._2 .pugliaPay').hide(),
                  a('#mapScroller .scrollBlock._2 .pugliaVideo').css('transform', 'scale(' + (1 - (progress - .65) * 4) + ')'),
                  a('#mapScroller .scrollBlock._2').css('transform', 'translateX(-' + 100 * ((progress - .65) * 4) + '%)')),
                progress > .625 && progress < .65 && a('#mapScroller .scrollBlock._2 .pugliaVideo').css('transform', 'scale(1)'),
                progress < .675 && progress > .3 && (a('#mapScroller .scrollBlock._3 .pugliaPay .row').removeClass('show'),
                  a('#mapScroller .scrollBlock._2 .pugliaPay .row').addClass('show')),
                progress > .675 && progress < .875 && (a('#mapScroller .scrollBlock._3 .pugliaPay .row._1').addClass('show'),
                  a('#mapScroller .scrollBlock._3 .pugliaPay .row._1').css('transform', 'translateX(' + (127.5 - 127.5 * ((progress - .675) * 5)) + '%)'),
                  a('#mapScroller .scrollBlock._3 .pugliaPay .row._2').addClass('show'),
                  a('#mapScroller .scrollBlock._3 .pugliaPay .row._2').css('transform', 'translateX(' + (127.5 - 127.5 * ((progress - .675) * 5)) + '%)')),
                progress < .875 && (a('#mapScroller .scrollBlock._3 .pugliaVideo').css('transform', 'scale(0)'),
                  document.getElementById('videoPorto2').pause(),
                  document.getElementById('videoPorto2').currentTime = 0),
                progress > .875 && progress < 1 && a('#mapScroller .scrollBlock._3 .pugliaVideo').css('transform', 'scale(' + (progress - .875) * 8 + ')'),
                progress < .895 && a('#mapScroller .scrollBlock._3 .pugliaVideo').removeClass('show'),
                progress > .895 && (document.getElementById('videoPorto2').play(),
                  a('#mapScroller .scrollBlock._3 .pugliaVideo').addClass('show')),
                progress < 1 && a('#homeCulture .row').removeClass('show')),
                (typeof b.currentElements.galleryLock == 'object' || typeof b.currentElements.galleryLock2 == 'object') && !isMobile && (typeof b.currentElements.galleryLock == 'object' && (current = scrollLayer.scroll.els.galleryLock),
                typeof b.currentElements.galleryLock2 == 'object' && (current = scrollLayer.scroll.els.galleryLock2),
                ($scrollPos > current.top && $scrollPos < current.top + 350 && !$galleryLocking || $scrollPos > current.top - 350 && $scrollPos < current.top && !$galleryLocking) && ($galleryLocking = !0,
                  scrollLayer.scrollTo(current.el, {
                    duration: 500
                  })),
                ($scrollPos > current.top + 350 || $scrollPos < current.top - 350) && ($galleryLocking = !1))
              }
            ),
            a('#masseriaRel').on('click', function() {
              a('#mainBar .button').removeClass('active'),
                a('#masseriaRel').addClass('active'),
              isMobile && c(),
                scrollLayer.scrollTo('#masseriaComposition', {
                  duration: 1,
                  offset: isMobile ? -80 : 0,
                  disableLerp: !0
                }),
                setTimeout(function() {
                  scrollLayer.update(),
                    scrollLayer.scrollTo('#masseriaComposition', {
                      duration: 1,
                      offset: isMobile ? -40 : 100
                    })
                }, 100)
            }),
            a('#camereRel').on('click', function() {
              a('#mainBar .button').removeClass('active'),
                a('#camereRel').addClass('active'),
              isMobile && c(),
                scrollLayer.scrollTo('#homeRooms', {
                  duration: 1,
                  offset: isMobile ? -80 : -0,
                  disableLerp: !0
                }),
                setTimeout(function() {
                  scrollLayer.update(),
                    scrollLayer.scrollTo('#homeRooms', {
                      duration: 1,
                      offset: isMobile ? -40 : 100
                    })
                }, 100)
            }),
            a('#posizioneRel').on('click', function() {
              a('#mainBar .button').removeClass('active'),
                a('#posizioneRel').addClass('active'),
              isMobile && c(),
                scrollLayer.scrollTo('#homeMap', {
                  duration: 1,
                  offset: isMobile ? -80 : 0,
                  disableLerp: !0
                }),
                setTimeout(function() {
                  scrollLayer.update(),
                    scrollLayer.scrollTo('#homeMap', {
                      duration: 1,
                      offset: isMobile ? -40 : 100
                    })
                }, 100)
            }),
            a('#diningRel').on('click', function() {
              a('#mainBar .button').removeClass('active'),
                a('#diningRel').addClass('active'),
                scrollLayer.update(),
              isMobile && c(),
                scrollLayer.scrollTo('#ristoranteComposition', {
                  duration: 1,
                  offset: isMobile ? -80 : 0,
                  disableLerp: !0
                }),
                setTimeout(function() {
                  scrollLayer.update(),
                    scrollLayer.scrollTo('#ristoranteComposition', {
                      duration: 1,
                      offset: isMobile ? -40 : 100
                    })
                }, 100)
            }),
            a('#serviziRel').on('click', function() {
              a('#mainBar .button').removeClass('active'),
                a('#serviziRel').addClass('active'),
              isMobile && c(),
                scrollLayer.scrollTo('#homeServizi', {
                  duration: 1,
                  offset: isMobile ? -80 : -100,
                  disableLerp: !0
                }),
                setTimeout(function() {
                  scrollLayer.update(),
                    scrollLayer.scrollTo('#homeServizi', {
                      duration: 1,
                      offset: isMobile ? -40 : 100
                    })
                }, 100)
            }),
            a('#barLogo').on('click', function() {
              a('#mainBar .button').removeClass('active'),
                scrollLayer.scrollTo(100, {
                  duration: 1,
                  offset: 0,
                  disableLerp: !0
                }),
                setTimeout(function() {
                  scrollLayer.update(),
                    scrollLayer.scrollTo(0, {
                      duration: 1,
                      offset: 0
                    })
                }, 100)
            }),
            scrollLayer.on('call', c=>{
                c == 'load' && !$imagesLoaded && ($imagesLoaded = !0,
                  b()),
                c == 'layerUpdate' && $updateReady && ($updateReady = !1,
                  scrollLayer.update(),
                  setTimeout(function() {
                    $updateReady = !0
                  }, 1e3)),
                c == 'restoreTitleReset' && f == 'up' && $scrollPos < scrollLayer.scroll.els.restoreTitle.top && a('#restoreTitle').removeClass('show'),
                c == 'fixMasseria' && !isMobile && (a('#masseriaScroller .scrollBlock._2 .veil').css('opacity', 0),
                  a('#masseriaScroller .scrollBlock._2 .text').css('transform', 'translateY(-50%)').css('opacity', 0),
                  a('#masseriaScroller .scrollBlock._2,#masseriaScroller .scrollBlock._1').css('transform', 'translateX(-100%)'),
                  a('#masseriaScroller .scrollBlock._3, #masseriaScroller .scrollBlock._3 .pic').css('transform', 'translateX(0)'),
                  a('#mainBar .button').removeClass('active'),
                  a('#camereRel').addClass('active')),
                c == 'fixRestaurant' && !isMobile && (a('#ristoranteScroller .scrollBlock._2 .veil').css('opacity', 0),
                  a('#ristoranteScroller .scrollBlock._2 .text').css('transform', 'translateY(-50%)').css('opacity', 0),
                  a('#ristoranteScroller .scrollBlock._2,#ristoranteScroller .scrollBlock._1').css('transform', 'translateX(-100%)'),
                  a('#ristoranteScroller .scrollBlock._3, #ristoranteScroller .scrollBlock._3 .pic').css('transform', 'translateX(0)'),
                  a('#mainBar .button').removeClass('active'),
                  a('#serviziRel').addClass('active')),
                c == 'fixPosition' && !isMobile && (a('#mapBackground, #mapSvg').addClass('show').removeClass('translated'),
                  a('#mapScroller .scrollBlock._2, #mapScroller .scrollBlock._1').css('transform', 'translateX(-100%)'),
                  a('#mapScroller .scrollBlock._3 .pugliaPay .row._1, #mapScroller .scrollBlock._3 .pugliaPay .row._2').css('transform', 'translateX(0%)').addClass('show'),
                  a('#mapScroller .scrollBlock._3 .pugliaVideo').css('transform', 'scale(1)').addClass('show'),
                  document.getElementById('videoPorto2').play())
              }
            ),
            isMobile,
          a('.wpforms-form').length > 0 && (a('.wpforms-datepicker').length > 0 && (jQuery('.wpforms-datepicker-wrap')[0]._flatpickr.config.onOpen.push(function() {
            scrollLayer.stop()
          }),
            jQuery('.wpforms-datepicker-wrap')[0]._flatpickr.config.onClose.push(function() {
              scrollLayer.start()
            })),
          a('.wpforms-timepicker').length > 0 && (jQuery('.wpforms-timepicker').timepicker().on('hideTimepicker', function(a) {
            scrollLayer.start()
          }),
            jQuery('.wpforms-timepicker').timepicker().on('showTimepicker', function() {
              scrollLayer.stop()
            })),
            a('.wpforms-disclaimer-description').on('mouseover touchstart', function() {
              scrollLayer.stop()
            }).on('mouseout touchend', function() {
              scrollLayer.start()
            }),
            window.wpforms.scrollToError = function() {}
            ,
            window.wpforms.animateScrollTop = function() {}
            ,
            a('.formContainer .wpforms-submit').on('click', function() {
              clearInterval(d),
                d = setInterval(function() {
                  a('.formContainer .wpforms-form').length || (clearInterval(d),
                    scrollLayer.update(),
                    scrollLayer.scroll.checkScroll(!0),
                    scrollLayer.scrollTo('#detailForm'))
                }, 50)
            })),
            a('.menuController, .menuClose').on('click', function() {
              e()
            }),
            a('.menuController').on('mouseover', function() {}),
          current == "index" && (a('#mainLogo').addClass('show'),
            a('#homePic img').imagesLoaded(function() {
              a('#homePic').addClass('show'),
              isMobile && a('.leadingLogo').addClass('show')
            })),
            a('.alerter').on('click', function(a) {
              alert('Stiamo ultimando questa sezione!')
            })
        }),
        a(window).on('resize', function() {
          windowWidth = a(window).width(),
            windowHeight = a(window).height(),
            isMobile = windowWidth <= 960
        });
      function f(b) {
        $url = b,
          a('body').addClass('has_transition_1500').addClass('exiting'),
          setTimeout(function() {
            window.location.href = $url
          }, 350)
      }
      function b() {
        a('img:eq(' + $imgGlobalID + ')')[0].hasAttribute("data-src") ? (a('img:eq(' + $imgGlobalID + ')').attr('src', a('img:eq(' + $imgGlobalID + ')').attr('data-src')).removeAttr('data-src'),
          a('img:eq(' + $imgGlobalID + ')').imagesLoaded(function(c) {
            a('img:eq(' + $imgGlobalID + ')').attr('data-update') == 'true' && scrollLayer.update(),
            a('img:eq(' + ($imgGlobalID + 1) + ')').length > 0 && ($imgGlobalID++,
              b())
          })) : a('img:eq(' + ($imgGlobalID + 1) + ')').length > 0 && ($imgGlobalID++,
          b())
      }
      function e() {
        !a('nav').hasClass('active')
      }
      function g(b, e) {
        var f = a('.gallery .slideContainer', b).length
          , c = a('.gallery  .slideContainer.active', b).index();
        e == ">" && (a('.gallery .slideContainer.active', b).index() < f - 1 ? c = a('.gallery .slideContainer.active', b).index() + 1 : c = 0,
          d(b, c, f, e)),
        e == "<" && (a('.gallery .slideContainer.active', b).index() == 0 ? c = f - 1 : c = a('.gallery .slideContainer.active', b).index() - 1,
          d(b, c, f, e))
      }
      var c = 0;
      function d(d, b, f, e) {
        c++,
          a('.gallery .slideContainer:eq(' + b + ') img', d)[0].hasAttribute("gallery-src") ? (a('.gallery .slideContainer:eq(' + b + ') img', d).attr('srcset', a('.gallery .slideContainer:eq(' + b + ') img', d).attr('gallery-srcset')).removeAttr('gallery-srcset').attr('src', a('.gallery .slideContainer:eq(' + b + ') img', d).attr('gallery-src')).removeAttr('gallery-src'),
            a('.loading').removeClass('no_opacity').show(),
            a('.gallery .slideContainer:eq(' + b + ') img', d).imagesLoaded(function() {
              a('.loading').addClass('no_opacity'),
                setTimeout(function() {
                  a('.loading', d).hide()
                }, 800),
                a('.gallery .slideContainer', d).removeClass('active'),
                a('.gallery .slideContainer:eq(' + b + ') .slide, .gallery .slideContainer:eq(' + b + ') .t_container, .gallery .slideContainer:eq(' + b + ') img', d).addClass('no_transition'),
                a('.gallery .slideContainer:eq(' + b + ')', d).css('z-index', c).removeClass('show').addClass('active'),
              e == '>' && a('.gallery .slideContainer:eq(' + b + ') .slide', d).removeClass('mask_left').addClass('mask_right'),
              e == '<' && a('.gallery .slideContainer:eq(' + b + ') .slide', d).removeClass('mask_right').addClass('mask_left'),
                setTimeout(function() {
                  a('.gallery .slideContainer:eq(' + b + ') .slide, .gallery .slideContainer:eq(' + b + ') .t_container, .gallery .slideContainer:eq(' + b + ') img', d).removeClass('no_transition'),
                    a('.gallery .slideContainer:eq(' + b + ')', d).addClass('show')
                }, 15),
              a('.counter', d) && a('.counter .current', d).text(b + 1)
            })) : (a('.gallery .slideContainer', d).removeClass('active'),
            a('.gallery .slideContainer:eq(' + b + ') .slide, .gallery .slideContainer:eq(' + b + ') .t_container, .gallery .slideContainer:eq(' + b + ') img', d).addClass('no_transition'),
            a('.gallery .slideContainer:eq(' + b + ')', d).css('z-index', c).removeClass('show').addClass('active'),
          e == '>' && a('.gallery .slideContainer:eq(' + b + ') .slide', d).removeClass('mask_left').addClass('mask_right'),
          e == '<' && a('.gallery .slideContainer:eq(' + b + ') .slide', d).removeClass('mask_right').addClass('mask_left'),
            setTimeout(function() {
              a('.gallery .slideContainer:eq(' + b + ') .slide, .gallery .slideContainer:eq(' + b + ') .t_container, .gallery .slideContainer:eq(' + b + ') img', d).removeClass('no_transition'),
                a('.gallery .slideContainer:eq(' + b + ')', d).addClass('show')
            }, 15),
          a('.counter', d) && a('.counter .current', d).text(b + 1))
      }
    })
  }
)(jQuery)
