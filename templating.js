window.onload = function () {
    templa();
}

function templa()  {
    var template = tempa;

    var data = {
        "title": "Story",
        "names": [
            {"name": "Tarzan"},
            {"name": "Jane"}
        ]
    };
    
    var result = Mustache.render(template, data);
    
    document.getElementById("test").innerHTML = result;
}


