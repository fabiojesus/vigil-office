var dataAdd;

window.onload = function () {
    renderSideBar();
}

function handleData(info, functionName) {
    buildHtmlTable(info, mainSection, functionName)
}

function logout() {
    localStorage.clear();
    location.href = "./login.html";
}

function renderAdd() {
    var result = Mustache.render(addTemplate, dataAdd);
    document.getElementById("mainSection").innerHTML = result;
}

function renderEdit() {
    renderAdd();
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
    <a onclick="renderSubjects()">Subjects</a>
</li>
<li>
    <a onclick="renderExaminers()">Examiners</a>
</li>
<li>
    <a onclick="renderExaminees()">Examinees</a>
</li>
<li>
    <a onclick="renderTests()">Tests</a>
</li>
<li>
    <a onclick="renderRooms()">Rooms</a>
</li>
<li>
    <a onclick="renderQrCode()">QRCode</a>
</li>
<li>
    <a onclick="logout()">Logout</a>
</li>
</ul>
`
    document.getElementById("sideBar").innerHTML = sideBar;
}