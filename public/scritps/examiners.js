var token = "";

window.onload = function () {
    renderSideBar();
    var button = document.getElementById("addExaminers");
    button.addEventListener("click", renderAdd)

    token = localStorage.getItem("token");
    var url = '{examiners(token:"' + token + '"){content{id,name,identification}}}';
    fetchGet(url, info => handleData(info));
}
var dataAdd = {
    "action" : "subjects",
    "function" : "addSubject()",
    "fields" : [
        {"name": "Name"},
        {"name": "Field"}
    ]
}

function handleData(info){
    console.log(info)
    buildHtmlTable(info.data.examiners.content, tableExaminers, "Examiner")
}

function renderAdd(){
    var result = Mustache.render(addTemplate, dataAdd);
    document.getElementById("mainSection").innerHTML = result;
}

function addSubject(){
    var name = document.getElementById("Name").value,
        field = document.getElementById("Field").value;

    if(name && field){
        var token = localStorage.getItem("token");
        var url = 'mutation{registerSubject(token:"' + token + '",name:"' + name + '",field:"' + field + '"){code}}';
        fetchPost(url, info => handleAdd(info));
    }
        
}

function handleAdd(info){
        
}

// DELETE

function deleteSubject(id){
    var url = 'mutation{deleteExamier(token:"' + token + '",id:"' + id + '"){content,code}}';
    fetchPost(url, info => handleDelete(info));
}

function handleDelete(info){
    var code = info.data.deleteSubject.code;
    if(code == "9310")
        alert("Impossible to delete, subject as records");
}

// EDIT

function editSubject(id){
    var url = '{subject(token:"' + token + '",id:"' + id + '"){content{name,field}code}}';
    fetchGet(url, info => handleEdit(info));
}

function handleEdit(info){
    var code = info.data.subject.content;

    if(code == "9310")
        alert("Impossible to delete, subject as records");
}