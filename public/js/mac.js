if(screen.width > 1900&&window.devicePixelRatio >= 2){
    setStyleSheet()
}
function setStyleSheet() {
    document.getElementById("a").setAttribute("rel", "stylesheet");
    document.getElementById("b").setAttribute("rel", "alternate");
}
if(screen.width >= 1280 && screen.width < 1440&&window.devicePixelRatio >= 2){
    document.getElementById("a1").setAttribute("rel","stylesheet");
    document.getElementById("b").setAttribute("rel","alternate");

}