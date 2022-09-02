$(document).ready(function() {


    /* 자세히 보기 눌렀을 때; 보류 */
    $('.img2_tit').click(function(){

        // $('.img2_conbox').slideToggle(200);
        // $('#tab_menu2').toggleClass('move');
    

    })
    


    /* 게시판 목록 접기 */
    $('.head').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.content').slideToggle(500);

        $('.pagination_wrap1').toggleClass('move');
        $('.pagination_wrap2').toggleClass('move');
        $('#board1>#footer_img').toggleClass('move');
        $('#board2>#footer_img').toggleClass('move');



    })

    /* 탭메뉴 */

    /* 상단 타이틀 */
    var tab_title = $('#tab_title2>div')
    var contents =  $('#all_board > div')

    contents.hide().eq(0).show();

     
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


    /* 차트 */

    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2022-06-03', '2022-06-04', '2022-06-05', '2022-06-06', '2022-06-07', '2022-06-08', '2022-06-09'],
        datasets: [{
            label: '일별 확진환자 추이',
            backgroundColor: 'rgb(233, 233, 233)',
            borderColor: 'rgb(50, 135, 195)',
            data: [77, 179, 103, 74, 51, 77, 165],
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 10,

        }]
    },

    // Configuration options go here
    options: {}
});



















})