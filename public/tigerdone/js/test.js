
// h1 = document.getElementsByClassName('head_content')
// h1.onmousewheel = function (event) {
//     event = event || window.event;
//     console.log('onmousewheel');
//     console.log(event);
//     console.log('event.detail=' + event.detail);//0
//     console.log('event.wheelDelta=' + event.wheelDelta);
// };

var dom1 = document.getElementsByClassName('head_content')

document.addEventListener("wheel", myFunction);
function myFunction() {
    // 页可见区域宽： document.body.clientWidth;
    // 网页可见区域高： document.body.clientHeight;

    // 网页可见区域宽： document.body.offsetWidth   （包含边线的宽）;
    // 网页可见区域高： document.body.offsetHeight （包含边线的宽）;

    // 网页正文全文宽： document.body.scrollWidth;
    // 网页正文全文高： document.body.scrollHeight;

    // 网页被卷去的高： document.body.scrollTop;
    // 网页被卷去的左： document.body.scrollLeft;

    // 网页正文项目组上： window.screenTop;
    // 网页正文项目组左： window.screenLeft;

    // 屏幕辨别率的高： window.screen.height;
    // 屏幕辨别率的宽： window.screen.width;

    var h1 = document.body.clientWidth;
    var h2 = document.body.clientHeight;

    var h3 = document.body.offsetWidth;
    var h4 = document.body.offsetHeight;

    var h5 = document.body.scrollWidth;
    var h6 = document.body.scrollHeight;

    var h7 = document.body.scrollTop;
    var h8 = document.body.scrollLeft;

    var h9 = document.body.clientTop;
    var h10 = document.body.offsetLeft;

    var h11 = window.pageXOffset;
    var h12 = window.pageYOffset;


    console.log('clientWidth'+h1);
    console.log('clientHeight'+h2);
    console.log('offsetWidth'+h3);
    console.log('offsetHeight'+h4);
    console.log('scrollWidth'+h5);
    console.log('scrollHeight'+h6);
    console.log('scrollTop'+h7);
    console.log('scrollLeft'+h8);
    console.log('document.body.clientTop'+h9);
    console.log('document.body.offsetLeft'+h10);
    console.log('window.pageXOffset'+h11);
    console.log('window.pageYOffset'+h12);



    console.log("_________");

}

