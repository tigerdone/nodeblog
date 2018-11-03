window.onload = function () {

    $(".body3_item div").click(function () {
        var i = $(this).index();
        $(this).addClass("publication_choose").siblings().removeClass("publication_choose");
        $("#Publications"+i).show().siblings().hide();

        // 是否显示 show more
        var name = "#Publications" + i + " > " + "div";
        if($(name).length >= 7){
            $("#Publications_more").show()
        }
        else {
            $("#Publications_more").hide()
        }
    })

    function show_more(obj) {

        // console.log(obj.getElementsByClassName("body3_list").length);
        if(obj.getElementsByClassName("body3_list").length>=7){
            document.getElementById("Publications_more").className = "";
        }
        else {
            document.getElementById("Publications_more").className = "display";
        }

    }

}


