if(goPAGE() == "pc"&&window.devicePixelRatio >= 1.5){
    setStyleSheet()
}
function setStyleSheet() {
    document.getElementById("a").setAttribute("rel", "stylesheet");
    document.getElementById("b").setAttribute("rel", "alternate");
}

// if(screen.width >= 1280 && screen.width < 1440&&window.devicePixelRatio >= 2){
//     document.getElementById("a1").setAttribute("rel","stylesheet");
//     document.getElementById("b").setAttribute("rel","alternate");
//
// }


function goPAGE(){
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        // window.location.href="移动端url";
        return "mobile"
    }
    else {
        // window.location.href="pc端url";
        return "pc"
    }
}