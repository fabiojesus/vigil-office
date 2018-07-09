window.onload = function () {
    var buttonLogin = document.getElementById("ButtonLogin");
    buttonLogin.addEventListener("click", doLogin)
}

function doLogin() {
    var email = document.getElementById("LoginEmail").value;
    var password = document.getElementById("LoginPassword").value;
    if (email && password) {
        var url = 'mutation{login(email:"' + email + '",password:"' + password + '"){token,code}}';
        fetchPost(url, info => handleLogin(info));
    }
}

function handleLogin(info) {
    let tokenLogin = info.data.login.token,
        code = info.data.login.code;
    if (code == "9990") { // LOGIN_SUCCESSFUL : 9990
        localStorage.setItem("token", tokenLogin);
        location.href = "./subjects.html"
    }
    if (code == "9503") { // ACCOUNT_NOT_EXISTS : 9503

    }
}