$(document).ready(function() {
    $("#my-menu").mmenu({
        extensions:['effect-menu-slide','pagedim-black'],
        navbar:{title:'<img src="img/logo.png">'},
        "navbars": [
            {   
               "position": "bottom",
               "content": [
                  "<a class='fa fa-envelope' href='#/'></a>",
                  "<a class='fa fa-vk' href='#/'></a>",
                  "<a class='fa fa-facebook' href='#/'></a>"
               ]
            }
         ],
        "setSelected": {
            "hover": true
         },
        offCanvas:{
            position:'right'
        }
    });
    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish',function(){
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish',function(){
        $('.hamburger').removeClass('is-active');
    });  
});

$( "#b1" )
    .mouseenter(function() {
    $( '#b1h' ).removeClass('none');
  })
  .mouseleave(function() {
    $( '#b1h' ).addClass('none');
  });
$( "#b2" )
    .mouseenter(function() {
    $( '#b2h' ).removeClass('none');
  })
  .mouseleave(function() {
    $( '#b2h' ).addClass('none');
  });
$( "#b3" )
    .mouseenter(function() {
    $( '#b3h' ).removeClass('none');
  })
  .mouseleave(function() {
    $( '#b3h' ).addClass('none');
  });
$( "#b4" )
    .mouseenter(function() {
    $( '#b4h' ).removeClass('none');
  })
  .mouseleave(function() {
    $( '#b4h' ).addClass('none');
  });

$(document).ready(function() {
    var owl = $('.owl-carousel').owlCarousel({
        loop: 'true',
        center: 'true',
        margin: 120,
        stagePadding: 20,
        items: 1,
        responsive:{
        371:{
            stagePadding: 40,
            margin: 120
        },
        430:{
            stagePadding: 70,
            margin: 120
        },
        500:{
            stagePadding: 100,
            margin: 80
        },
        600:{
            stagePadding: 150,
            margin: 90
        },
        680:{
            stagePadding: 180,
            margin: 100
        },
        753:{
            stagePadding: 220
        },
        813:{
            stagePadding: 260
        },
        872:{
            stagePadding: 290
        },
        930:{
            stagePadding: 320
        },
        1047:{
            stagePadding: 350
        },
        1153:{
            stagePadding: 380
        }
    }
    });
    $('#next_slide').click(function(){
    owl.trigger('next.owl.carousel', [800]);
    });
    $('#prev_slide').click(function(){
    owl.trigger('prev.owl.carousel', [800]);
    });
});
//$(window).scroll(function(){
//    var off = $(".icon").offset();
//    console.log(off);
//    var st = $(this).scrollTop() - off.top;
//    console.log(st)
//    $('#bli').css({
//        "transform" :"translate(0%, " + st/3 + "%"
//    });
//});
$("#my-menu a").on("click",function (e) {
  e.preventDefault();

  var current=$(this).attr("href");
     height=$(current).offset().top;

  $("html,body").animate({
    scrollTop:height-60
  },500);
});
document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done')){
            preloader.classList.add('done');
            $('html').removeClass('overflow');
        }
    },1000);
}

var img = document.querySelector('.my-header__img');
var left = (document.body.clientWidth - img.clientWidth) / 2;
var hamburger = document.querySelector('.hamburger');
hamburger.style.right = left + 'px';
document.body.onresize = function () {
    var left = (document.body.clientWidth - img.clientWidth) / 2;
    hamburger.style.right = left + 'px';
}
