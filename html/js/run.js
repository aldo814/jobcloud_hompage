$(document).ready(function () {
        
    $(window).scroll(function(){
				var window = $(this).scrollTop();
				if (window) {
					$('#header').addClass('active',1000);
				} else {
					$('#header').removeClass('active',1000);
				}
			});
    
            /*메인 비쥬얼*/
            function updSwiperNumericPagination() {
                this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">0' + (this.realIndex + 1) + '</span><span class="total">0' + this.el.slidesQuantity + "</span>";
            }

            $(".visual").each(function () {
                this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

                var mySwiper = new Swiper('.visual', {
                    speed: 800,
                    loop: false,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                    on: {
                        init: updSwiperNumericPagination,
                        slideChange: updSwiperNumericPagination
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });

                $('.wrap-autoplay-control > .swiper-button-pause').click(function () {
                    $(this).hide();
                    mySwiper.autoplay.stop();
                    $('.wrap-autoplay-control > .swiper-button-play').show()

                });

                $('.wrap-autoplay-control > .swiper-button-play').click(function () {
                    $(this).hide();
                    mySwiper.autoplay.start();
                    $('.wrap-autoplay-control > .swiper-button-pause').show();
                });

            });


            /* 풀페이지 스크롤 */
            if ($(window).width() > 1024) {
                var divs = $('.target');
                var div = 0;
                div = -1
                divs.each(function (i) {
                    if (div < 0 && ($(this).offset().top >= $(window).scrollTop())) {
                        div = i;
                    }
                });
                $(window).on('mousewheel DOMMouseScroll', function (e) {
                    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                        if (div > 0) {
                            div--;
                        }
                    } else {
                        if (div < divs.length) {
                            div++;
                        }
                    }
                    $('html,body').stop().animate({
                        scrollTop: divs.eq(div).offset().top
                    }, 500);
                    return false;
                });
                $(window).resize(function () {
                    $('html,body').scrollTop(divs.eq(div).offset().top);
                });

            } else {
                $('#header .menu_btn').click(function () {
                    $(this).toggleClass('active');
                    $('#header #gnb').toggleClass('active');
                    $('body').toggleClass('lock')
                });
            }

            let bWidth = window.innerWidth;
            window.addEventListener("resize", () => {
                const nWidth = window.innerWidth;
                if ((bWidth < 1024 && nWidth >= 1024) || (bWidth > 1023 && nWidth <= 1023)) {
                    location.reload();
                }
                beforeWidth = nowWidth;
            });



            $(window).resize(function () {
                if ($(window).width() > 1024) {
                    var divs = $('.target');
                    var div = 0;
                    div = -1
                    divs.each(function (i) {
                        if (div < 0 && ($(this).offset().top >= $(window).scrollTop())) {
                            div = i;
                        }
                    });
                    $(window).on('mousewheel DOMMouseScroll', function (e) {
                        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                            if (div > 0) {
                                div--;
                            }
                        } else {
                            if (div < divs.length) {
                                div++;
                            }
                        }
                        $('html,body').stop().animate({
                            scrollTop: divs.eq(div).offset().top
                        }, 500);
                        return false;
                    });
                    $(window).resize(function () {
                        $('html,body').scrollTop(divs.eq(div).offset().top);
                    });

                } else {
                    $('#header .menu_btn').click(function () {
                        $(this).toggleClass('active');
                        $('#header #gnb').toggleClass('active');
                        $('body').toggleClass('lock')
                    });
                }
            });




            // a클릭시 부드럽게 이동
            $('a').click(function () {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            });

            // 퀵메뉴
            $('.quick li a').click(function () {
                // 버튼 hover 이벤트
                return false
                $(this).parent().addClass('on');
                $(this).parent().siblings().removeClass('on');
            });
            // target 위치 표시와, 이동  
            var sections = $('.target'),
                nav = $('.quick'),
                nav_height = nav.outerHeight();

            $(window).on('scroll', function () {
                var cur_pos = $(this).scrollTop();

                sections.each(function () {
                    var top = $(this).offset().top - nav_height,
                        bottom = top + $(this).outerHeight();

                    if (cur_pos >= top && cur_pos <= bottom) {
                        nav.find('a').parent().removeClass('on');

                        $(this).parent().addClass('on');
                        nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('on');
                    }
                });
            });

            nav.find('a').on('click', function () {
                var $el = $(this),
                    id = $el.attr('href');

                $('html, body').animate({
                    scrollTop: $(id).offset().top
                }, 500);

                return false;
            });

            /* 첫번째 section 퀵메뉴 bg*/
            $('#section01').mouseenter(function () {
                $('.quick').addClass('first');
            });

            $(".tab_title li").click(function () {
                var idx = $(this).index();
                $(".tab_title li").removeClass("on");
                $(".tab_title li").eq(idx).addClass("on");
                $(".tab_cont > div").hide();
                $(".tab_cont > div").eq(idx).fadeIn();
            })


            var mySwiper = new Swiper('.pf_slide', {
                speed: 800,
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });

            var mySwiper = new Swiper('.qs_slide', {
                speed: 800,
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });

            var _tabList = $(".tab_list");
            var _tabTarget = _tabList.children("li");
             var swiper  = new Swiper('.tbs', {
                 autoHeight : true,
                 speed: 800,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                on: {
                slideChange: function(){
            	var actIndex = swiper.activeIndex; //현재 액티브 된 슬라이드 번호
            	$(".tab_list li").removeClass("active");
            	$(".tab_list li.tab_"+actIndex).addClass("active");
            }
        }
            });

                _tabTarget.on("click", function ($e) {

                    var itemIndex = $(this).index();
                    swiper.slideTo(itemIndex); //index값으로 slideto에 넘김
                });
    
    

            });
