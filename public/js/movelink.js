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
var memory = 0;
window.onscroll = function() {
    // var scrollY = window.scrollY;
    // var height = 530;
    // if(screen.width > 1900&&window.devicePixelRatio >= 2){
    //     height = 270;
    // }
    //


    var X = $(".other_linker").offset().top - $(window).scrollTop();
    if(X <= 0 && memory === 0){
        $(".other_linker").addClass("other_linker2");
        memory = $(window).scrollTop();
    }
    if(memory !== 0 && memory > $(window).scrollTop()){
        $(".other_linker").removeClass("other_linker2");
        memory = 0;
    }

}




