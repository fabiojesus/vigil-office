var token = "";

function renderTests() {
    document.getElementById("mainSection").innerHTML = "";
    dataAdd = {
        "action": "tests",
        "function": "addTest()",
        "fields": [
            { "name": "dateStart" },
            { "name": "dateEnd" },
            { "name": "dateLimit" },
            { "name": "subjectId" },
            { "name": "type" }
        ]
    }

    token = localStorage.getItem("token");
    var url = '{tests(token:"' + token + '"){content{id,year,confirmationDate,dateStart,dateEnd,subjectId,type,active}}}';
    fetchGet(url, info => handleData(info.data.tests.content, "Test"));
}


function addTest() {
    var dateStart = document.getElementById("dateStart").value,
        dateEnd = document.getElementById("dateEnd").value,
        dateLimit = document.getElementById("dateLimit").value,
        subjectId = document.getElementById("subjectId").value,
        type = document.getElementById("type").value;

    if (name && field) {
        var token = localStorage.getItem("token");
        var url = 'mutation{registerTest(token:"' + token + '",dateStart:"' + dateStart + '",dateEnd:"' + dateEnd + '",dateLimit:"' + dateLimit + '",subjectId:"' + subjectId + '",type:"' + type + '"){code}}';
        fetchPost(url, info => handleAddTest(info));
    }

}

function handleAddTest(info) {

}

// DELETE

function deleteTest(id) {
    var url = 'mutation{deleteSubject(token:"' + token + '",id:"' + id + '"){content,code}}';
    fetchPost(url, info => handleDeleteTest(info));
}

function handleDeleteTest(info) {
    var code = info.data.deleteSubject.code;
    if (code == "9310")
        alert("Impossible to delete, subject as records");
}

// EDIT

function editTest(id) {
    var url = '{subject(token:"' + token + '",id:"' + id + '"){content{name,field}code}}';
    fetchGet(url, info => handleEditTest(info));
}

function handleEditTest(info) {
    var code = info.data.test.content;

    if (code == "9310")
        alert("Impossible to delete, subject as records");
}