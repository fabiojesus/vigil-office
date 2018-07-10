var token = "";

window.onload = function () {
    var buttonLogin = document.getElementById("addSubject");
    buttonLogin.addEventListener("click", renderAdd)

    token = localStorage.getItem("token");
    var url = '{subjects(token:"' + token + '"){content{id,name,field}}}';
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
    buildHtmlTable(info.data.subjects.content, tableSubjects, "Subject")
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

function deleteSubject(id){
    var url = 'mutation{deleteSubject(token:"' + token + '",id:"' + id + '"){content,code}}';
    console.log(url)
    fetchPost(url, info => handleDelete(info));
}

function handleDelete(info){
    var code = info.data.deleteSubject.code;
    console.log(code);
    if(code == "9310")
        alert("Impossible to delete, subject as records");
}