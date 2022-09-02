$(function(){

/* focusin */
$('nav > ul > li').on('click', function(){
    $(this).find('.sub').addClass('active');	
    });
    /* 서브네비를 누를때 동선이 겹치므로 click으로 변형함 */
    
    $('nav > ul > li').on('mouseleave focusout', function(){
    $(this).find('.sub').removeClass('active');		
    });
    

/* 서브네비 */

$('#s_nav1 > ul > li').hover(function(){
    $(this).find('ul').slideDown(500);
}, function(){
    $(this).find('ul').slideUp(500);
})

$('#s_nav2 > ul > li').hover(function(){
    $(this).find('ul').slideDown(500);
}, function(){
    $(this).find('ul').slideUp(500);
})



/* ----------------------------------날씨---------------------------- */

$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=37.5034813&lon=126.7658019&appid=931cf418021445795381368f79037456&units=Metric', function(data){

    var $city = data.name;
    var $cTemp = data.main.temp;
    var $wIcon = data.weather[0].icon;


    let weatherIcon = {
        '01' : 'wi wi-day-sunny',
        '02' : 'wi wi-day-cloudy',
        '03' : 'wi wi-cloud',
        '05' : 'wi wi-cloudy',
        '09' : 'wi wi-day-rain-mix',
        '10' : 'wi wi-showers',
        '11' : 'wi wi-thunderstorm',
        '13' : 'wi wi-snowflake-cold',
        '50' : 'wi wi-smog'
    }

    var $wIcon = (data.weather[0].icon).substr(0,2); /* (시작, 길이) */
    
    $('.ctemp').append($cTemp + '℃'); /* 현재온도 */


    // $('.cicon').append('<i class = "' + weatherIcon[$wIcon] + '"></i> ');
    $('.cname').append($city);



});

















/* 사이드바 */

$('.bar_tit').click(function(){
    $(this).parent().find('.bar_con').slideToggle(); 
    // $(this).parent().find('.down').toggleClass('active'); 보류

})

$('.bar_con:eq(0)').click(); /* 첫번째 메뉴는 창을 열자마자 열린 상태로 */





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