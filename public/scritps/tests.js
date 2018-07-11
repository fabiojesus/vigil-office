var token = "";

window.onload = function () {
    renderSideBar();
    var button = document.getElementById("addTest");
    button.addEventListener("click", renderAdd)

    token = localStorage.getItem("token");
    var url = '{tests(token:"' + token + '"){content{year,confirmationDate,dateStart,dateEnd,subjectId,type,active}}}';
    fetchGet(url, info => handleData(info));
}
var dataAdd = {
    "action": "subjects",
    "function": "addSubject()",
    "fields": [
        { "name": "dateStart" },
        { "name": "dateEnd" },
        { "name": "dateLimit" },
        { "name": "subjectId" },
        { "name": "type" }
    ]
}

function handleData(info) {
    console.log(info)
    buildHtmlTable(info.data.tests.content, tableTests, "Test")
}

function renderAdd() {
    var result = Mustache.render(addTemplate, dataAdd);
    document.getElementById("mainSection").innerHTML = result;
}

function addSubject() {
    var dateStart = document.getElementById("dateStart").value,
        dateEnd = document.getElementById("dateEnd").value,
        dateLimit = document.getElementById("dateLimit").value,
        subjectId = document.getElementById("subjectId").value,
        type = document.getElementById("type").value;

    if (name && field) {
        var token = localStorage.getItem("token");
        var url = 'mutation{registerTest(token:"' + token + '",dateStart:"' + dateStart + '",dateEnd:"' + dateEnd + '",dateLimit:"' + dateLimit + '",subjectId:"' + subjectId + '",type:"'+ type +'"){code}}';
        fetchPost(url, info => handleAdd(info));
    }

}

function handleAdd(info) {

}

// DELETE

function deleteSubject(id) {
    var url = 'mutation{deleteSubject(token:"' + token + '",id:"' + id + '"){content,code}}';
    fetchPost(url, info => handleDelete(info));
}

function handleDelete(info) {
    var code = info.data.deleteSubject.code;
    if (code == "9310")
        alert("Impossible to delete, subject as records");
}

// EDIT

function editSubject(id) {
    var url = '{subject(token:"' + token + '",id:"' + id + '"){content{name,field}code}}';
    fetchGet(url, info => handleEdit(info));
}

function handleEdit(info) {
    var code = info.data.subject.content;

    if (code == "9310")
        alert("Impossible to delete, subject as records");
}