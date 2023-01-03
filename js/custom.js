$(function(){

    "use strick"

    $(".back2top i").on('click',function(){
        $("html,body").animate({
            scrollTop : 0
        },1200)
    })

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop()

        if( scrolling > 20){
            $(".back2top i").fadeIn(500)
        }else{
            $(".back2top i").fadeOut(500)
        }

        if( scrolling > 50){
            $(".menu").addClass("nav_bg")
        }else{
            $(".menu").removeClass("nav_bg")
        }
    })


    
$('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fa-solid fa-angle-right nxtarw"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left prearw"></i>',
    centerMode: true,
    centerPadding: '0px',
  });


$('.service_bg').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<i class="fa-solid fa-angle-down nxtarw"></i>',
    prevArrow: '<i class="fa-solid fa-angle-up prearw"></i>',
    vertical:true,
    centerMode: true,
    centerPadding: '0px',
    verticalSwiping:true,

  });

  $('.testi_maintext').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testi_mainimg'
  });
  $('.testi_mainimg').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testi_maintext',
    vertical:true,
    nextArrow: '<i class="fa-solid fa-angle-down nxtarw"></i>',
    prevArrow: '<i class="fa-solid fa-angle-up prearw"></i>',
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true
  });

  $('.counter').counterUp({
    delay: 10,
    time: 2000
});


$('.team_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    
  });

  $('.brand_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    centerMode: true,
    centerPadding: '0px',
  });

})