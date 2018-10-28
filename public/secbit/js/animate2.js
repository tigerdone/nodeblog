

// var scrollY = 0;
var angle = 0;
var animate2_top = 0;
var animate3_top = 0;
var animate4_top = 0;
var codeframe_view = true;
var content3_code1_view = true;
var content3_code2_view = true;

var content4_code1_view = true;
var content4_code2_view = true;
var content4_code3_view = true;
var alpha1 = 1;
var alpha2 = 1;
var alpha3 = 1;
var alpha4 = 1;
var alpha5 = 1;

var width_reduce = 0;
var height_reduce = 0;
var refer_reduce = 0;//相对点减少度

window.onscroll = function() {

    $(document).ready(function () {

        //animate1
        var scrollY = window.scrollY;
        // console.info(scrollY);
        if (scrollY < 500) {

            // alpha = 1 - scrollY / 400;
            alpha1 = 1 - scrollY / 172;
            alpha2 = 1 - (scrollY -172) / 222;
            alpha3 = 1 - (scrollY - 354) / 132;
            // alpha4 = 1 - scrollY / 650;
            // alpha5 = 1 - scrollY / 700;
            width_reduce = scrollY / 4 * 3;
            height_reduce = width_reduce / 19*8;
            refer_reduce = height_reduce * 5 / 7;//相对点减少度
            // console.log('h12:'+scrollY);
            // head animate :506为不动点，1440*717高度
            if (alpha1 < 0) {
                alpha1 = 0
            }
            if (alpha2 < 0) {
                alpha2 = 0
            }
            if (alpha3 < 0) {
                alpha3 = 0
            }
            if(scrollY < 172){
                alpha2 = 1
            }
            if(scrollY < 354){
                alpha3 = 1

            }
            // if (alpha4 < 0) {
            //     alpha4 = 0
            // }
            // if (alpha5 < 0) {
            //     alpha5 = 0
            // }
            $("#main_head1").fadeTo(5, alpha1);
            $("#main_head2").fadeTo(5, alpha1);

            $("#main_head3").fadeTo(5, alpha2);
            $("#main_head4").fadeTo(5, alpha3);
            $("#main_head5").fadeTo(5, alpha3);


            $("#ball_nebula").animate({
                left: -214 + width_reduce / 2 + 'px',
                top: 23 + refer_reduce + 'px',
                width: (1040 - width_reduce) + 'px'
            }, 5);

        }

        //animate2
        angle = scrollY / 1100 * 360;
        if (scrollY < 1100) {
            $('.img_bg').rotate(angle);
            $('#content1_img1').rotate(-angle);
            $('#content1_img2').rotate(-angle);
            $('#content1_img3').rotate(-angle);
            $('#content1_img5').rotate(angle);
        }
        //animate3
        //400--900,1353px
        if (scrollY < 900 && scrollY > 400) {
            animate2_top = (scrollY - 400) / 500 * 903
            // console.log("ojbk:"+the_top)
            // var code = $("#code");
            $("#code").animate({
                top: -animate2_top + "px",
            }, 5);



        }
        //505*372
        if(scrollY > 900 && codeframe_view == true){
            $(".codeframe").fadeTo(1000,0.15);
            codeframe_view = false
            $("#result").animate({
                left: '6px',
                top: '77px',
                width: '505px',
                opacity:'1',
            }, 1000);
        }
        if(scrollY < 900 && codeframe_view == false){
            $(".codeframe").fadeTo(1000,1);
            codeframe_view = true
            $("#result").animate({
                left: '263px',
                top: '237px',
                width: '0',
                opacity:'0',
            }, 1000);
        }

        //1117--1917
        //animate3
        if(scrollY > 1117 && scrollY < 1917){
            if(scrollY < 1317){
                animate3_top = (scrollY - 1117) / 200 * 231
                $("#content3_code1").stop(true,true);
                $("#content3_code2").stop(true,true);

                $("#content3_code1").animate({
                    top: -animate3_top + "px",
                }, 5);
            }

            if(scrollY > 1517 && content3_code1_view == true){
                $("#content3_code1").stop(true,true);
                $("#content3_code2").stop(true,true);

                $("#content3_code1").fadeTo(500,0);
                content3_code1_view = false
            }
            if(scrollY < 1517 && content3_code1_view == false){
                $("#content3_code1").stop(true,true);
                $("#content3_code2").stop(true,true);

                $("#content3_code1").fadeTo(500,1);
                content3_code1_view = true
            }

            if(scrollY > 1717 && content3_code2_view == true){
                $("#content3_code1").stop(true,true);
                $("#content3_code2").stop(true,true);

                $("#content3_code2").fadeTo(500,0);
                content3_code2_view = false
            }
            if(scrollY < 1717 && content3_code2_view == false){
                $("#content3_code1").stop(true,true);
                $("#content3_code2").stop(true,true);

                $("#content3_code2").fadeTo(500,1);
                content3_code2_view = true
            }
        }

        //1717--2384
        //animate4
        if(scrollY > 1612 && scrollY < 2412){
            if(scrollY > 1612 && scrollY < 1887){
                // console.log("ojbk")
                if (content4_code1_view == true && content4_code2_view == true){
                    $("#content4_code2").fadeTo(1,0);
                    $("#content4_code1").fadeTo(1,0);
                }
            }

            if(scrollY > 1887 && content4_code3_view == true){
                $("#content4_code3").fadeTo(500,0);
                $("#content4_code2").fadeTo(500,1);
                content4_code3_view = false
            }
            if(scrollY < 1887 && content4_code3_view == false){
                $("#content4_code3").fadeTo(500,1);
                content4_code3_view = true
            }

            if(scrollY > 2062 && content4_code2_view == true){
                $("#content4_code2").fadeTo(500,0);
                $("#content4_code1").fadeTo(1,1);

                content4_code2_view = false
            }
            if(scrollY < 2062 && content4_code2_view == false){
                $("#content4_code2").fadeTo(500,1);
                $("#content4_code1").fadeTo(1,0);
                content4_code2_view = true
            }

            if(scrollY > 2062 && scrollY < 2237){
                animate4_top = (scrollY - 2062) / 175 * 528//878-350
                $("#content4_code1").animate({
                    top: -animate4_top + "px",
                }, 5);
            }
        }
    });
}
