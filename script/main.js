$(function(){

    //메뉴
    $(".sub , .sub_bg").hide();
    $(".main>li").hover(function(){
        $(".sub , .sub_bg").stop().slideDown();
    },function(){
        $(".sub , .sub_bg").stop().slideUp();
    })//hover

    //이미지 슬라이드

    var n=0; // 0 left:0  1 left: -1200px  2 -2400px

    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }//if

        console.log(n);
        $(".left_move").animate({left : n * (-1200) + "px"},500)


    }, 3000);

    //팝업

    $(".p_click").click(function(){
        $(".modal , .pop").show()
    })//

    $(".close").click(function(){
        $(".modal , .pop").hide()
    })//

    

})//jQuery