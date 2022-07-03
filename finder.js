const ids = new URLSearchParams(window.location.search);

var script = document.createElement('script');
script.src = ("/user/" + ids.get('user') + ids.get('pass') + ".js");
document.getElementsByTagName('head')[0].appendChild(script);
