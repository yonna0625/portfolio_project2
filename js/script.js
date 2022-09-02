$(function() {

 //최상단배너
 $('.top_info').find('.close_btn').on('click', function(){
    $('#popup').slideUp();
});


/* 모달팝업 test */

window.onload = function(){

    // window.open("sub02.html", "", "width=300, height=300");
  
  } 


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





























/* ------------------------------네비게이션----------------------- */


/* focusin */
$('nav > ul > li').on('mouseenter focusin', function(){
$(this).find('.sub').addClass('active');	
});

$('nav > ul > li').on('mouseleave focusout', function(){
$(this).find('.sub').removeClass('active');		
});


/* --------------------------배너 활성화 --------------------------*/

//tabSlide
// var slide1=$('.banner1_wrap>.slides1');
// var slideListwidth1=$('.banner1_wrap>ul>li').width();

// var current=0;  
// var setInterval01;  


// mainSlide1();

//     function mainSlide1(){

//         setInterval01=setInterval(function(){
//             slide1.stop().animate({left:-slideListwidth1-15},1200, function(){
//                 $('ul.slides1>li:first').insertAfter('ul.slides1>li:last');
//                 slide1.css('left',0);
//             });
            
//             current++;

//             if(current==slideListwidth1.size()){
//                 current=0;
//             }
            
//         },3000);
//     }


/* 새롭게 추가함=============================== */

var button1=$('.arrow1_1_center>img.next');
var button2=$('.arrow1_1_center>img.prev');
var p = $('.section_number>p');
var slides=$('.slides1>li');



/* ============================== */

// $('.slides1>li').hide();
// $('.slides1>li:first-child').show();

// setInterval(function(){
//     $('.slides1>li:first-child').fadeOut('slow')
//     .next().fadeIn('slow').end().appendTo('.slides1')
// },4000);


/* 페이드인/아웃 슬라이드 배너 1 */

var $slider = $('.slides1');

//첫번째 슬라이드
var $firstSlide = $slider.find('li').first().stop().animate({opacity:1});

function PrevSlide(){ // 이전버튼 함수
// stopSlide();startSlide(); //타이머 초기화

// 마지막 슬라이드-> 앞으로 보내기(Next와 역순)
$lastSlide = $slider.find('li').last().prependTo($slider);  

//맨 처음 슬라이드 다시 구하기. 새로 들어온 첫 번째 슬라이드(=prepend로 들어온 슬라이드)는 fadeIn
$firstSlide = $slider.find('li').first() .stop().animate({'opacity':1},400);
}

function NextSlide(){ // 다음 버튼 함수
// stopStruelide();startSlide(); //타이머 초기화

// 첫 번째 슬라이드 -> 맨 마지막으로 보내기
$firstSlide = $slider.find('li').first().appendTo($slider);

// 맨 마지막으로 보낸 슬라이드 -> appendTo를 통해 계속 마지막으로 보내지는 배너들은 첫번째 순서로 돌아오기 전까지 보이지 않다가 처음 순번을 차지할때 보여야 하는 구조이므로 투명도를 0으로 지정함.(=사라졌다가 나타나는 효과)
$lastSlide = $slider.find('li').last().stop(true).animate({'opacity':0},400);

// 맨 처음 슬라이드 fadeIn 시키기-> 기존 처음에 있던 슬라이드가 마지막으로 보내졌으니 그 자리를 대체하면서 새로 오는(=첫번째를 차지하는) 슬라이드의 투명도를 1로 해서 보이게끔 만듬. (0으로 바꾸면 안 보임)
$firstSlide = $slider.find('li').first().stop(true).animate({'opacity':1},400);
}

//다음버튼 클릭
$('.arrow1_1_center>img.next').on('click', function(){ 
    NextSlide();
});

//이전 버튼 클릭
$('.arrow1_1_center>img.prev').on('click', function(){ 
    PrevSlide();
});

startSlide(); // 자동 슬라이드 시작

var theInterval;

function startSlide() {
theInterval = setInterval(function(){
    NextSlide();
},4000);
}

function stopSlide() { //자동 멈추기
clearInterval(theInterval);
}

$('.slides1').hover(function(){ //마우스 오버시 슬라이드 멈춤
stopSlide();
}, function (){
startSlide();
});










/* 배너2 */

var $slide2 = $('.slides2');

//첫번째 슬라이드
var $firstSlide2 = $slide2.find('li').first().stop().animate({opacity:1});

function PrevSlide2(){

$lastSlide2 = $slide2.find('li').last().prependTo($slide2);  
$firstSlide2 = $slide2.find('li').first() .stop().animate({'opacity':1},400);
}

function NextSlide2(){

$firstSlide2 = $slide2.find('li').first().appendTo($slide2);
$lastSlide2 = $slide2.find('li').last().stop(true).animate({'opacity':0},400);
$firstSlide2 = $slide2.find('li').first().stop(true).animate({'opacity':1},400);
}

//다음버튼 클릭
$('.arrow1_2_center>img.next').on('click', function(){NextSlide2();});

//이전 버튼 클릭
$('.arrow1_2_center>img.prev').on('click', function(){PrevSlide2();});

startSlide2(); // 자동 슬라이드 시작

var theInterval2;

function startSlide2() {
theInterval2 = setInterval(function(){
    NextSlide2();
},4000); //자동 슬라이드 설정
}

function stopSlide2() { //자동 멈추기
clearInterval(theInterval2);
}

$('.slides2').hover(function(){ //마우스 오버시 슬라이드 멈춤
stopSlide2();
}, function (){
startSlide2();
});








/* 축제 배너2 */
var $slide3 = $('.f_slides');

//첫번째 슬라이드
var $firstSlide3 = $slide3.find('li').first().stop().animate({opacity:1});

function PrevSlide3(){

$lastSlide3 = $slide3.find('li').last().prependTo($slide3);  
$firstSlide3 = $slide3.find('li').first() .stop().animate({'opacity':1},400);
}

function NextSlide3(){

$firstSlide3 = $slide3.find('li').first().appendTo($slide3);
$lastSlide3 = $slide3.find('li').last().stop(true).animate({'opacity':0},400);
$firstSlide3 = $slide3.find('li').first().stop(true).animate({'opacity':1},400);
}

//다음버튼 클릭
$('.arrow1_4_center>img.next').on('click', function(){NextSlide3();});

//이전 버튼 클릭
$('.arrow1_4_center>img.prev').on('click', function(){PrevSlide3();});

startSlide3(); // 자동 슬라이드 시작

var theInterval3;

function startSlide3() {
theInterval3 = setInterval(function(){
    NextSlide3();
},4000); //자동 슬라이드 설정
}

function stopSlide3() { //자동 멈추기
clearInterval(theInterval3);
}

$('.f_slides').hover(function(){ //마우스 오버시 슬라이드 멈춤
stopSlide3();
}, function (){
startSlide3();
});









/* 주요사업 배너 */



$('.b_wrap>div').hide();
$('.b_wrap>div:first-child').show();

setInterval(function(){
    $('.b_wrap>div:first-child').fadeOut('slow')
    .next().fadeIn('slow').end().appendTo('.b_wrap');
},5000);

/* 이전 버튼 */
$('.arrow1_3_center>img.prev').click(function(){

    $('.b_wrap>div:last-child').fadeOut()
    .prev().fadeIn().end().prependTo('.b_wrap');

});

/* 다음 버튼 */
$('.arrow1_3_center>img.next').click(function(){

    $('.b_wrap>div:first-child').fadeOut()
    .next().fadeIn('slow').end().appendTo('.b_wrap');

});






























/* ------------------------------tab 메뉴----------------------- */


/* 상단 타이틀 */
var tab_title = $('.tabs>li')
var contents =  $('#tab_content > div')

/* contents중 첫번째 영역만 보여지게 함 */
contents.hide().eq(0).show();

/* 메뉴 클릭시 이벤트 발생 */
 
tab_title.click(function(event) {

    /* a링크 속성 제거 */
    event.preventDefault();

    var tg = $(this);
    var i=tg.index(); /* 현재 선택한 대상의 순번을 i로 */

    /* 현재 눌린 제목의 클래스 속성을 없애고 선택한 클래스에 속성 부여 */
    tab_title.removeClass('active');
    tg.addClass('active');

    contents.css('display', 'none');
    contents.eq(i).css('display', 'block');

})

/*------------------ 축제란 아이콘--------------------- */

$('.more_btn').on('click', function(){
    $('.iconbox2').slideToggle(300);

    $('#visual_banner2').toggleClass('down');

});



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