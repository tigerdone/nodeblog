

var data = new Date().getHours()
var dele_time = 2000;
var last_time_stair = 0;
console.log(data.toLocaleString());
ex_bg()
setInterval(ex_bg,2*60*1000);

function ex_bg() {
    console.log("time 2333")
    if(data < 12 && data >= 6&&last_time_stair !== 1){
        $(".bg_box").eq(0).css("opacity","0");
        $(".bg_box").eq(1).css("opacity","0");
        $(".bg_box").eq(2).css("opacity","1");

        $(".bg_box").eq(2).animate({opacity: 0},dele_time);
        $(".bg_box").eq(0).animate({opacity: 1},dele_time);
        last_time_stair = 1;

    }


    if(data < 19 && data >= 12&&last_time_stair !== 2){
        $(".bg_box").eq(0).css("opacity","1");
        $(".bg_box").eq(1).css("opacity","0");
        $(".bg_box").eq(2).css("opacity","0");

        $(".bg_box").eq(0).animate({opacity: 0},dele_time);
        $(".bg_box").eq(1).animate({opacity: 1},dele_time);
        last_time_stair = 2;

    }


    if((data < 24 && data >= 19|| data < 6 && data >= 0)&&last_time_stair !== 3){

        $(".bg_box").eq(0).css("opacity","0");
        $(".bg_box").eq(1).css("opacity","1");
        $(".bg_box").eq(2).css("opacity","0");

        $(".bg_box").eq(1).animate({opacity: 0},dele_time);
        $(".bg_box").eq(2).animate({opacity: 1},dele_time);
        last_time_stair = 3;

    }

}


