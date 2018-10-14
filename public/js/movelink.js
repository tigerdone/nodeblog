window.onscroll = function() {
    var scrollY = window.scrollY;
    if(scrollY > 530){
        $(".other_linker").addClass("other_linker2");
    }else {
        $(".other_linker").removeClass("other_linker2");
    }
}


