var token = "";

function renderRooms() {
    document.getElementById("mainSection").innerHTML = "";
    dataAdd = {
        "action": "tests",
        "function": "addTest()",
        "fields": [
            { "name": "name" },
            { "name": "seats" }
        ]
    }

    token = localStorage.getItem("token");
    var url = '{rooms(token:"' + token + '"){content{id,name,seats}code}}';
    fetchGet(url, info => handleData(info.data.tests.content, "Test"));
}


function addRoom() {
    var name = document.getElementById("name").value,
        seats = document.getElementById("seats").value;

    if (name && field) {
        var token = localStorage.getItem("token");
        var url = 'mutation{registerRoom(token:"' + token + '",name:"' + name + '",seats:"' + seats + '"){code}}';
        fetchPost(url, info => handleAdd(info));
    }

}

function handleAdd(info) {

}

// DELETE

function deleteRoom(id) {
    var url = 'mutation{deleteRoom(token:"' + token + '",id:"' + id + '"){content,code}}';
    fetchPost(url, info => handleDelete(info));
}

function handleDelete(info) {
    var code = info.data.deleteRoom.code;
    if (code == "9310")
        alert("Impossible to delete, room as records");
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