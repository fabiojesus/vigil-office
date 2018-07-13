var token = "";

function renderSubjects() {
    document.getElementById("mainSection").innerHTML = "";
    dataAdd = {
        "action": "subjects",
        "function": "addSubject()",
        "fields": [
            { "name": "Name" },
            { "name": "Field" }
        ]
    }

    token = localStorage.getItem("token");
    var url = '{subjects(token:"' + token + '"){content{id,name,field}code}}';
    fetchGet(url, info => handleData(info.data.subjects.content, "Subject"));
}

function addSubject() {
    var name = document.getElementById("Name").value,
        field = document.getElementById("Field").value;

    if (name && field) {
        var token = localStorage.getItem("token");
        var url = 'mutation{registerSubject(token:"' + token + '",name:"' + name + '",field:"' + field + '"){code}}';
        fetchPost(url, info => handleAddSubject(info));
    }

}

function handleAddSubject(info) {

}

// DELETE

function deleteSubject(id) {
    var url = 'mutation{deleteSubject(token:"' + token + '",id:"' + id + '"){content,code}}';
    fetchPost(url, info => handleDeleteSubject(info));
}

function handleDeleteSubject(info) {
    var code = info.data.deleteSubject.code;
    if (code == "9310")
        alert("Impossible to delete, subject as records");
}

// EDIT

function editSubject(id) {
    var url = '{subject(token:"' + token + '",id:"' + id + '"){content{name,field}code}}';
    fetchGet(url, info => handleEditSubject(info, id));
}

function handleEditSubject(info, id) {
    var content = info.data.subject.content;
    var newFields = [];
    dataAdd.fields.forEach(function (field) {
        var t = field.name + "";
        newFields.push({ "name": field.name, value: content[t.toLowerCase()] });
    });
    dataAdd.fields = newFields;
    dataAdd.isEdit = true;
    dataAdd.id = id;
    dataAdd.function = "confirmEdit()";
    renderEdit();
}


function confirmEdit(){
    var name = document.getElementById("Name").value,
    field = document.getElementById("Field").value,
    id = document.getElementById("id").value;
    console.log(name, field, id);
    if(name && field && id){
        var url = 'mutation{updateSubject(token:"' + token + '",id:"' + id + '",name:"' + name + '",field:"' + field + '"){content,code}}';
        fetchPost(url, info => responseEditSubject(info));
    }
}


function responseEditSubject(res){
    console.log(res)
}