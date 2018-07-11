function buildHtmlTable(json, idTable, functionName) {
    var columns = addAllColumnHeaders(json, idTable);
    for (var i = 0; i < json.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = json[i][columns[colIndex]];
            var id = json[i].id;
            if (cellValue == null) { cellValue = ""; }
            row$.append($('<td/>').html(cellValue));
        }
        row$.append($('<td/>').html(editForm(id, functionName) + deleteForm(id, functionName)));
        row$.append($('<td/>').html());
        $(idTable).append(row$);
        
    }
    
}

function addAllColumnHeaders(json, idTable) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < json.length; i++) {
        var rowHash = json[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    headerTr$.append($('<th/>').html("Opções"));
    $(idTable).append(headerTr$);
    return columnSet;
}

function getValue(o, p) {
    if (typeof p === 'string') {
        p = p.split('.')
    }
    return p.length ? getValue(o[p.shift()], p) : o;
}

function deleteForm(id, functionName){
    var a = "" + id;
    a.trim();
    return `<button onclick='delete${functionName}("${a}")'>Remover</button>`;
}

function editForm(id, functionName){
    var a = "" + id;
    a.trim();
    return `<button onclick='edit${functionName}("${a}")'>Editar</button>`;
}