$(function(){


    /* footer 활성화 */


/* 첫번째 메뉴 */
$('.fnav_1').on('click',function(){
    $('.footer_menu1').slideToggle(600);
    $('.footer_menu1').css('display', 'grid');
    
    /* 해당 메뉴가 열릴 동안 다른 메뉴는 중첩되어서 열리지 않게 다 hide 처리 */
    $('.footer_menu2').hide();
    $('.footer_menu3').hide();
    $('.footer_menu4').hide();
    $('.footer_menu5').hide();

})

$('.fnav_2').on('click',function(){
    $('.footer_menu2').slideToggle(600);
    $('.footer_menu2').css('display', 'grid');

    $('.footer_menu1').hide();
    $('.footer_menu3').hide();
    $('.footer_menu4').hide();
    $('.footer_menu5').hide();


})
$('.fnav_3').on('click',function(){
    $('.footer_menu3').slideToggle(600);
    $('.footer_menu3').css('display', 'grid');

    $('.footer_menu1').hide();
    $('.footer_menu2').hide();
    $('.footer_menu4').hide();
    $('.footer_menu5').hide();


})
$('.fnav_4').on('click',function(){
    $('.footer_menu4').slideToggle(600);
    $('.footer_menu4').css('display', 'grid');

    $('.footer_menu1').hide();
    $('.footer_menu2').hide();
    $('.footer_menu3').hide();
    $('.footer_menu5').hide();


})
$('.fnav_5').on('click',function(){
    $('.footer_menu5').slideToggle(600);
    $('.footer_menu5').css('display', 'grid');

    $('.footer_menu1').hide();
    $('.footer_menu2').hide();
    $('.footer_menu3').hide();
    $('.footer_menu4').hide();


})
    
})





