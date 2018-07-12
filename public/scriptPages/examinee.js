var token = "";

function renderExaminers() {
    document.getElementById("tableContent").innerHTML = "";
    dataAdd = {
        "action": "subjects",
        "function": "addSubject()",
        "fields": [
            { "name": "name" },
            { "name": "identification" },
            { "name": "email" },
            { "name": "course" },
            { "name": "studentNumber" },
        ]
    }

    token = localStorage.getItem("token");
    var url = '{examinees(token:"' + token + '"){content{id,name,identification}code}}';
    fetchGet(url, info => handleData(info.data.examinees.content, "Examinee"));
}


function addSubject() {
    var name = document.getElementById("name").value,
        field = document.getElementById("identification").value,
        email = document.getElementById("email").value,
        course = document.getElementById("course").value,
        studentNumber = document.getElementById("studentNumber").value;

    if (name && field) {
        var token = localStorage.getItem("token");
        var url = 'mutation{registerExaminee(token:"' + token + '",name:"' + name + '",field:"' + field + '",email:"' + email + '",course:"' + course + '",studentNumber:"' + studentNumber + '"){code}}';
        fetchPost(url, info => handleAdd(info));
    }

}

function handleAdd(info) {

}

// DELETE

function deleteSubject(id) {
    var url = 'mutation{deleteExaminee(token:"' + token + '",id:"' + id + '"){content,code}}';
    fetchPost(url, info => handleDelete(info));
}

function handleDelete(info) {
    var code = info.data.deleteExaminee.code;
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