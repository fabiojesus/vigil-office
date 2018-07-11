window.onload = function () {
    renderSideBar();
}

function generate() {
    document.getElementById("qrcode").innerHTML = "";
    var text = document.getElementById("textoQr").value || "A";
    console.log(text);
    new QRCode(document.getElementById("qrcode"), text);
}