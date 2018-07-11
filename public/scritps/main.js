function logout() {
    localStorage.clear();
    location.href = "./login.html";
}

function renderSideBar(){
    var sideBar = 
`
<ul>
<div id="topSideBar">
    <h1 id="logoSideBar">Vigil</h2>
</div>
<li>
    <a href="./login.html">Login</a>
</li>
<li>
    <a href="./subjects.html">Subjects</a>
</li>
<li>
    <a href="./examiners.html">Examiners</a>
</li>
<li>
    <a href="./tests.html">Tests</a>
</li>
<li>
    <a href="./qrcode.html">QRCode</a>
</li>
<li>
    <a onclick="logout()">Logout</a>
</li>
</ul>
`
    document.getElementById("sideBar").innerHTML = sideBar;
}