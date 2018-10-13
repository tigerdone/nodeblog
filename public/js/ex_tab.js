window.onload = function () {
    // var mytabs = $(".body3_item");

    // var mytab = $(".body3_item");
    //
    // var Paper = $(".Paper");
    //
    // var patent = $("#patent");
    // var copyright = $("#copyright");
    // var Awards = $("#Awards");

    // $(".header_items a").click(function () {
    //     $(this).addClass("choose").siblings().removeClass("choose");
    // })

    $(".body3_item div").click(function () {
        var i = $(this).index();
        $(this).addClass("publication_choose").siblings().removeClass("publication_choose");
        $("#Publications"+i).show().siblings().hide();
        var name = "#Publications" + i + " > " + "div";
        if($(name).length >= 7){
            $("#Publications_more").show()
        }
        else {
            $("#Publications_more").hide()
        }

    })





    // for(var i = 0;i<mytab.length;i++){
    //     mytab[i].getElementsByTagName("a")[0].indexs = i;
    //     mytab[i].getElementsByTagName("a")[0].onclick = function () {
    //
    //         for(var j = 0;j<mytab.length;j++){
    //             mytab[j].className = "publication_button";
    //         }
    //         mytab[this.indexs].className = "body3_get";
    //
    //         Paper.className = "display";
    //         patent.className = "display";
    //         copyright.className = "display";
    //         Awards.className = "display";
    //
    //         if(this.indexs === 0){
    //             Paper.className = "";
    //             show_more(Paper);
    //         }
    //         if(this.indexs === 1){
    //             patent.className = "";
    //             show_more(patent);
    //
    //         }
    //         if(this.indexs === 2){
    //             copyright.className = "";
    //             show_more(copyright);
    //
    //         }
    //         if(this.indexs === 3){
    //             Awards.className = "";
    //             show_more(Awards);
    //
    //         }
    //     }
    // }

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


