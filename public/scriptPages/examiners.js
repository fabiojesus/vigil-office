var token = "";

function renderExaminers() {
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
    var url = '{examiners(token:"' + token + '"){content{id,name,identification}}}';
    fetchGet(url, info => handleData(info.data.examiners.content, "Examiner"));
}


function addExaminer() {
    var name = document.getElementById("Name").value,
        field = document.getElementById("Field").value;

    if (name && field) {
        var token = localStorage.getItem("token");
        var url = 'mutation{registerSubject(token:"' + token + '",name:"' + name + '",field:"' + field + '"){code}}';
        fetchPost(url, info => handleAddExaminer(info));
    }

}

function handleAddExaminer(info) {

}

// DELETE

function deleteExaminer(id) {
    var url = 'mutation{deleteExamier(token:"' + token + '",id:"' + id + '"){content,code}}';
    fetchPost(url, info => handleDeleteExaminer(info));
}

function handleDeleteExaminer(info) {
    var code = info.data.deleteSubject.code;
    if (code == "9310")
        alert("Impossible to delete, subject as records");
}

// EDIT

function editExaminer(id) {
    var url = '{subject(token:"' + token + '",id:"' + id + '"){content{name,field}code}}';
    fetchGet(url, info => handleEditExaminer(info));
}

function handleEditExaminer(info) {
    var code = info.data.subject.content;

    if (code == "9310")
        alert("Impossible to delete, subject as records");
}