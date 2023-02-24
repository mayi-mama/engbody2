$(function(){

    /*スクロールするとheaderのボタンがでてくる*/
    $(window).scroll(function(){
        if($(this).scrollTop() > 200 ){
            $('.header').addClass('header--active');
        }else{
            $('.header').removeClass('header--active');
        }
    });

});
