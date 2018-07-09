window.onload = function () {
    var buttonLogin = document.getElementById("addSubject");
    buttonLogin.addEventListener("click", renderAdd)

    var token = localStorage.getItem("token");
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
    buildHtmlTable(info.data.subjects.content, tableSubjects)
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