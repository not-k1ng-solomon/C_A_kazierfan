$('#nextContent').click(()=>{
    $('#nextContentList').fadeIn();
    $('#nextContent').hide();
});
$(() =>{

    var $menu_popup = $('.menu-popup');

    $(".menu-triger, .menu-close").click(function(){
        if (window.matchMedia('(max-width: 650px)').matches) {
            $menu_popup.slideToggle(300, function () {
                if ($menu_popup.is(':hidden')) {
                    $('body').removeClass('body_pointer');
                } else {
                    $('body').addClass('body_pointer');
                }
            });
            return false;
        }
    });

    $(document).on('click', function(e){
        if (window.matchMedia('(max-width: 650px)').matches) {
            if (!$(e.target).closest('.menu').length) {
                $('body').removeClass('body_pointer');
                $menu_popup.slideUp(300);
            }
        }
    });
});

$('.header-list__item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$(document).ready(function(){
    $("#navbar").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
    });
});