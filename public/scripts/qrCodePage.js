window.onload = function () {
    renderSideBar();
}

function renderQrCode() {
    var divMainSection = document.getElementById("mainSection")
    divMainSection.innerHTML = "";
    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","textoQr");

    var button = document.createElement("button");
    button.innerHTML = 'GENERATE!';
    button.onclick = function () {
        return generate();
    };

    var divQr = document.createElement("div");
    divQr.setAttribute("id","qrcode");

    divMainSection.appendChild(input);
    divMainSection.appendChild(button);
    divMainSection.appendChild(divQr);
}


function generate() {
    document.getElementById("qrcode").innerHTML = "";
    var text = document.getElementById("textoQr").value || "Error";
    console.log(text);
    new QRCode(document.getElementById("qrcode"), text);
}