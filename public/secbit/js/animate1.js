

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

var width_reduce = 0;
var height_reduce = 0;
var refer_reduce = 0;//相对点减少度


var b1_width = 1920;
var b1_left = -372;
var b1_top = 23;

var correct1 = 0;
var is_mobile = false;

var diviceWidth = 0;

var diviceHeight = 0;

var ball_nebula = document.getElementById("ball_nebula");
var stair1 = document.getElementById("main_head1");
var stair2 = document.getElementById("main_head2");
var stair3 = document.getElementById("main_head3");
var stair4 = document.getElementById("main_head4");
var stair5 = document.getElementById("main_head5");

var animate2_bg = document.getElementById("img_bg");
var animate2_item1 = document.getElementById("content1_img1");
var animate2_item2 = document.getElementById("content1_img2");
var animate2_item3 = document.getElementById("content1_img3");
var animate2_item5 = document.getElementById("content1_img5");


// animate2_bg.style.transform = "rotate(" + (-150) + "deg)";

// console.log("animate2_item5"+animate2_bg)
// console.log("animate2_item5"+animate2_item1)
// console.log("animate2_item5"+animate2_item2)
// console.log("animate2_item5"+animate2_item3)
// console.log("animate2_item5"+animate2_item5)



if(/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
    // console.log("移动端");
    $("#b").after($("#a"));//第三层，左右两列位置不同
    is_mobile = true;

    diviceWidth = document.documentElement.clientWidth;

    diviceHeight = document.documentElement.clientHeight;

    // console.log(diviceWidth,diviceHeight)

} else {
    // console.log("pc端");
    is_mobile = false;

}

//更改浏览器窗口大小的动画
window.onresize = function() {
    var w = document.documentElement.scrollWidth || document.body.scrollWidth;

    if(w <= 1000){
        b1_width = 1040;
        b1_left = -199;
        b1_top = 101;

    }
    else{
        b1_width = 1920;
        b1_left = -372;
        b1_top = 23;
    }

    $("#ball_nebula").animate({
        left: b1_left + width_reduce / 2 + 'px',
        top: b1_top + refer_reduce + 'px',
        width: (b1_width - width_reduce) + 'px'
    }, 5);

}


window.onscroll = function() {

    var w = document.documentElement.scrollWidth || document.body.scrollWidth;
    // var h = document.documentElement.scrollHeight || document.body.scrollHeight;

    if(w <= 1000){
        b1_width = 1040;
        b1_left = -199;
        b1_top = 101;

    }

    else{
        b1_width = 1920;
        b1_left = -372;
        b1_top = 23;
    }

    $(document).ready(function () {

        //animate1
        var scrollY = window.scrollY;
        // var ball_nebula = document.getElementsByClassName("bg2_container");


        // console.info(scrollY);
        if (scrollY < 500) {

                // alpha = 1 - scrollY / 400;
                alpha1 = 1 - scrollY / 172;
                alpha2 = 1 - (scrollY -172) / 222;
                alpha3 = 1 - (scrollY - 354) / 132;
                // alpha4 = 1 - scrollY / 640;
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

                // $("#main_head1").fadeTo(5, alpha1);
                // $("#main_head2").fadeTo(5, alpha1);
                //
                // $("#main_head3").fadeTo(5, alpha2);
                // $("#main_head4").fadeTo(5, alpha3);
                // $("#main_head5").fadeTo(5, alpha3);
                stair1.style.opacity = alpha1;
                stair2.style.opacity = alpha1;
                stair3.style.opacity = alpha2;
                stair4.style.opacity = alpha3;
                stair5.style.opacity = alpha3;

                ball_nebula.style.left = b1_left + width_reduce / 2 + 'px';
                ball_nebula.style.top = b1_top + refer_reduce + 'px';
                ball_nebula.style.width = (b1_width - width_reduce) + 'px';

                // $("#ball_nebula").animate({
                //     left: b1_left + width_reduce / 2 + 'px',
                //     top: b1_top + refer_reduce + 'px',
                //     width: (b1_width - width_reduce) + 'px'
                // }, 5);

        }

        //animate2
        //1600：出现到结束划过的距离
        angle = scrollY / 1600 * 360;
        if (scrollY < 1600) {
            // $('.img_bg').rotate(angle);
            // $('#content1_img1').rotate(-angle);
            // $('#content1_img2').rotate(-angle);
            // $('#content1_img3').rotate(-angle);
            // $('#content1_img5').rotate(-angle);


            animate2_bg.style.transform = "rotate("+angle+"deg)";
            animate2_item1.style.transform = "rotate("+(-angle)+"deg)";
            animate2_item2.style.transform = "rotate("+(-angle)+"deg)";
            animate2_item3.style.transform = "rotate("+(-angle)+"deg)";
            animate2_item5.style.transform = "rotate("+(-angle)+"deg)";

        }

        //animate3
        //400--900,1353px
        if (is_mobile){


            var animate3_item =  document.getElementById("content2_right").getBoundingClientRect()
            var code = document.getElementById("code");

            // console.log("animate3_item"+animate3_item.y);
            //1177~-423
            if (animate3_item.y < 1177 && animate3_item.y > 377) {
                animate2_top = (animate3_item.y - 377) / 800 * 903

                code.style.top = -animate2_top + "px";
                // $("#code").animate({
                //     top: -animate2_top + "px",
                // }, 5);

            }

            //animate3
            //505*372
            if(animate3_item.y < 377 && codeframe_view == true){
                $(".codeframe").fadeTo(1000,0.15);
                codeframe_view = false
                $("#result").animate({
                    left: 20 + correct1 + 'px',
                    top: '77px',
                    width: '505px',
                    opacity:'1',
                }, 1000);
            }
            if(animate3_item.y > 377 && codeframe_view == false){
                $(".codeframe").fadeTo(1000,1);
                codeframe_view = true
                $("#result").animate({
                    left: '263px',
                    top: '237px',
                    width: '0',
                    opacity:'0',
                }, 1000);
            }



            var animate4_item =  document.getElementById("a").getBoundingClientRect()
            // console.log(animate4_item.y)

            //1117--1917
            //animate3
            if(animate4_item.y < (diviceHeight - 200) && animate4_item.y > 0){
                if(animate4_item.y > (diviceHeight - 200)/2){


                    animate3_top = (animate4_item.y - (diviceHeight - 200)/2) / (diviceHeight - 200)/2 * 231

                    // console.log(animate3_top);
                    // console.log("aa",(animate4_item.y - (diviceHeight - 200)/2));
                    // console.log("bb",(diviceHeight - 200)/2);

                    $("#content3_code1").stop(true,true);
                    $("#content3_code2").stop(true,true);

                    $("#content3_code1").animate({
                        top: -animate3_top + "px",
                    }, 50);

                }

                if(animate4_item.y < (diviceHeight - 200)/2 && content3_code1_view == true){
                    $("#content3_code1").stop(true,true);
                    $("#content3_code2").stop(true,true);

                    $("#content3_code1").fadeTo(500,0);
                    content3_code1_view = false
                }
                if(animate4_item.y > (diviceHeight - 200)/2 && content3_code1_view == false){
                    $("#content3_code1").stop(true,true);
                    $("#content3_code2").stop(true,true);

                    $("#content3_code1").fadeTo(500,1);
                    content3_code1_view = true
                }

                if(animate4_item.y < (diviceHeight - 200)/4 && content3_code2_view == true){
                    $("#content3_code1").stop(true,true);
                    $("#content3_code2").stop(true,true);

                    $("#content3_code2").fadeTo(500,0);
                    content3_code2_view = false
                }
                if(animate4_item.y > (diviceHeight - 200)/4 && content3_code2_view == false){
                    $("#content3_code1").stop(true,true);
                    $("#content3_code2").stop(true,true);

                    $("#content3_code2").fadeTo(500,1);
                    content3_code2_view = true
                }
            }

            var animate5_item =  document.getElementById("content4_animate").getBoundingClientRect()

            if(animate5_item.y < (diviceHeight - 200) && animate5_item.y > 0){
                if(animate5_item.y < (diviceHeight - 200) && animate5_item.y > (diviceHeight - 200)/4*3){
                    // console.log("ojbk")
                    if (content4_code1_view == true && content4_code2_view == true){
                        $("#content4_code2").fadeTo(1,0);
                        $("#content4_code1").fadeTo(1,0);
                    }
                }

                if(animate5_item.y < (diviceHeight - 200)/4*3 && content4_code3_view == true){
                    $("#content4_code3").fadeTo(500,0);
                    $("#content4_code2").fadeTo(500,1);
                    content4_code3_view = false
                }

                if(animate5_item.y > (diviceHeight - 200)/4*3 && content4_code3_view == false){
                    $("#content4_code3").fadeTo(500,1);
                    content4_code3_view = true
                }

                if(animate5_item.y < (diviceHeight - 200)/2 && content4_code2_view == true){
                    $("#content4_code2").fadeTo(500,0);
                    $("#content4_code1").fadeTo(1,1);

                    content4_code2_view = false
                }
                if(animate5_item.y > (diviceHeight - 200)/2 && content4_code2_view == false){
                    $("#content4_code2").fadeTo(500,1);
                    $("#content4_code1").fadeTo(1,0);
                    content4_code2_view = true
                }

            }
        }
        else{

            if (scrollY < 900 && scrollY > 400) {
                animate2_top = (scrollY - 400) / 500 * 903
                // console.log("ojbk:"+the_top)
                // var code = $("#code");
                $("#code").animate({
                    top: -animate2_top + "px",
                }, 5);
            }

            //animate3
            //505*372
            if(scrollY > 900 && codeframe_view == true){
                $(".codeframe").fadeTo(1000,0.15);
                codeframe_view = false
                $("#result").animate({
                    left: 20 + correct1 + 'px',
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

        }
    });

}
