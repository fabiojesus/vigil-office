const URL = 'https://vigil-server.herokuapp.com/?query='

function fetchGet(url , cb) {
    return fetch(URL + escapeHtml(url))
        .then(res => res.json())
        .then(res => { return cb(res)})
        .catch(err => { return err; })
}

function fetchPost(url ,cb) {
    return fetch(URL + escapeHtml(url), {
        method: 'POST'
    })
        .then(res => res.json())
        .then(res => { return cb(res) })
        .catch(err => { return err; })
}


function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#039;',
        ",": '%2C',
        "{": '%7B',
        "}": '%7D',
        "@": '%40',
        ":": '%3A',
        "(": '(',
        ")": ')',
        '"': '"',
    };
    return text.replace(/[&<>"',{}@:]()/g, function (m) { return map[m]; });
}