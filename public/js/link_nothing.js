$(".link").each(function () {
    if($(this).children("a").attr("href") === "javascript:"){
        $(this).addClass("link_nothing");
    }
})