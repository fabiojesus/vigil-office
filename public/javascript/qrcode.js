{{>sideBar}}

<script src="/javascripts/qrcode.js"></script>

<div id="mainSection">
    <input type="text" id="textoQr">
    <button onclick="generate()">GENERATE!</button>

    <div id="qrcode"></div>


    <script type="text/javascript">
        function generate() {
            document.getElementById("qrcode").innerHTML = "";
            var text = document.getElementById("textoQr").value || "A";
            console.log(text);
            new QRCode(document.getElementById("qrcode"), text);
        }
    </script>
</div>
