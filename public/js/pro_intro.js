$(document).ready(function () {
    if($("#pro_intro").css("width") >= 946 ){
        $("#pro_intro").width("100%");
    }
    else {
        console.log("okokok"+$("#pro_intro").css("width"));

        var xx = parseInt($("#pro_intro").css("width"))/9.46 + "%";

        console.log(xx);

        $("#pro_intro").width(xx);
    }
})