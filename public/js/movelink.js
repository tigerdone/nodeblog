// $(document).load(function () {
//     var height = 530;
//     if(screen.width > 1900&&window.devicePixelRatio >= 2){
//         height = 265;
//     }
//     window.onscroll = function() {
//         var scrollY = window.scrollY;
//
//         if(scrollY > height){
//             $(".other_linker").addClass("other_linker2");
//         }else {
//             $(".other_linker").removeClass("other_linker2");
//         }
//     }
// })
window.onscroll = function() {
    var scrollY = window.scrollY;
    var height = 530;
    if(screen.width > 1900&&window.devicePixelRatio >= 2){
        height = 270;
    }
    if(scrollY > height){
        $(".other_linker").addClass("other_linker2");
    }else {
        $(".other_linker").removeClass("other_linker2");
    }
}


