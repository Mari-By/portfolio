$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
       /*  adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/icon_chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/icon_chevron-right.png"></button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
                
        }
        }
        ]
    })

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog__link').each(function(i) {
        $(this).on('click', function(e) {
           e.preventDefault();
           $('.catalog__main-content').eq(i).toggleClass('catalog__main-content_active');
           $('.catalog__list-content').eq(i).toggleClass('catalog__list-content_active');
        })
      })

      $('.catalog__link-list').each(function(i) {
        $(this).on('click', function(e) {
           e.preventDefault();
           $('.catalog__main-content').eq(i).toggleClass('catalog__main-content_active');
           $('.catalog__list-content').eq(i).toggleClass('catalog__list-content_active');
        })
      })

      /* Модальные окна */

      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
      });

      

      $('.catalog__btn').each(function(i) {
        $(this).on('click', function() {
          $('.modal__descr').text($('.catalog__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        })
      });


      /* валидация форм */
      
        $('#consultation form').validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            phone: {
              required: true,
              minlength: 11
            },
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: {
              required: "Укажите Ваше имя, пожалуйста",
              minlength: jQuery.validator.format("Введите не менее {0} символов, пожалуйста")
            },
            phone: {
              required: "Укажите Ваш номер телефона",
              minlength: jQuery.validator.format("Введите {0} символов, пожалуйста"),
            },
            email: {
              required: "Укажите Ваш email, пожалуйста",
              email: "Ваш e-mail должен быть в формате name@domain.com"
            }
          }
  
        });
      
        $('#main-form').validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            phone: {
              required: true,
              minlength: 11
            },
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: {
              required: "Укажите Ваше имя, пожалуйста",
              minlength: jQuery.validator.format("Введите не менее {0} символов, пожалуйста")
            },
            phone: {
              required: "Укажите Ваш номер телефона",
              minlength: jQuery.validator.format("Введите {0} символов, пожалуйста"),
            },
            email: {
              required: "Укажите Ваш email, пожалуйста",
              email: "Ваш e-mail должен быть в формате name@domain.com"
            }
          }
  
        });
    
        $('#order form').validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            phone: {
              required: true,
              minlength: 11
            },
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: {
              required: "Укажите Ваше имя, пожалуйста",
              minlength: jQuery.validator.format("Введите не менее {0} символов, пожалуйста")
            },
            phone: {
              required: "Укажите Ваш номер телефона",
              minlength: jQuery.validator.format("Введите {0} символов, пожалуйста"),
            },
            email: {
              required: "Укажите Ваш email, пожалуйста",
              email: "Ваш e-mail должен быть в формате name@domain.com"
            }
          }
  
        });

        $('input[name=phone]').mask("+7 (999) 999-9999");

        $('form').submit(function(e) {
          e.preventDefault();

          if (!$(this).valid()) {
            return;
          }

          $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            date: $(this).serialize()
          }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
          });
          return false;
        });

        /* Плавный скроллинг в начало страницы */
        $(window).scroll(function() {
          if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
          } else {
            $('.pageup').fadeOut();
          }
        });

        $("a[href=#up]").click(function() {
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
        });

        /* Подключение WOW библиотеки */
        new WOW().init();

});