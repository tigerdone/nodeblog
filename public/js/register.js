function check() {
    var password1 = document.forms["register"]["password1"];
    var password2 = document.forms["register"]["password2"];
    if(password1 === password2){
        alert("两次输入密码不一致");
        return false
    }
}