if (!document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]) {if(new URLSearchParams(window.location.search).get('limit')){document.cookie = ("limit=" + new URLSearchParams(window.location.search).get('limit') + "; expires=Sun, 16 Jul 3567 06:23:41 GMT")}else{document.cookie = "limit=10; expires=Sun, 16 Jul 3567 06:23:41 GMT"}}else{}
if(new URLSearchParams(window.location.search).get('limit')){document.cookie = ("limit=" + new URLSearchParams(window.location.search).get('limit') + "; expires=Sun, 16 Jul 3567 06:23:41 GMT")}else{}

(async()=>{const res=await fetch(`/assets/json/imports/data`);const json=await res.json();importlist=(json);imports=new URLSearchParams(window.location.search).get('start') -1;(async()=>{const res=await fetch(`https://raw.githubusercontent.com/Kee7702/DreamsUserDB/main/assets/json/users`);const json=await res.json();userdb=(json);

                 if(importlist) {
if (importlist[(((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0)))]) {document.getElementById('importnavnext').href = '/imports?start=' + ((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0));}else{document.getElementById('importnavnext').remove()};
if (importlist[(((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)))]) {document.getElementById('importnavprev').href = '/imports?start=' + ((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0));}else{document.getElementById('importnavprev').remove()};

document.getElementById('audioImports').innerHTML = "Audio Imports";}
if (!new URLSearchParams(window.location.search).get('id')) {
do {imports++
   importicon = null
   var importaudio = null;
   var clipimg = null;
      var clipimg = document.createElement('img');
      clipimg.style = "height:36px;width:36px;position:absolute";
      clipimg.onerror = function onerror(event) {
    this.src = 'https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10'
}
      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc";
      clipname.className = "global-post-label";
      clipname.textContent = importlist[imports].import_name;
      var clipstatus = document.createElement('img');
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "schedule"
      var clipdesc = document.createElement('a');
      clipdesc.className = "global-post-details";
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.style = "background:#222";
      if (importlist[imports].imgHash) {importlist[imports].img = [{"hash": importlist[imports].imgHash,"color": "#000000"}];importlist[imports].imgHash = null}
      clipname.style = "font-size:16px;line-height:20px;color:#ccc;margin-left:40px";
      clipdesc.style = "margin-left:40px";
      clipdiv.appendChild(clipimg);
      clipname.href = ("/imports?id=" + importlist[imports].creation_id);
      clipimg.style = (`height: 36px;width: 36px;position: absolute;background-image:url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_9'),url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_7');background-color:` + importlist[imports].img[0].color + `;background-size: cover;background-position: center;`);
      clipimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==';
      clipdesc.textContent = ("Completed on " + importlist[imports].import_date);
      clipstatus.src = ('https://cdn.indreams.me/' + userdb[importlist[imports].userID].imphash + '_10');
      clipstatus.onerror = function onerror(event) {this.src = 'https://assets.indreams.me/images/users/default.png'};
      clipstatus.style = 'height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);';
      if (importlist[imports].import_iconoverride) {clipstatus.textContent = importlist[imports].import_iconoverride}else{}
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipstatus);
      clipdiv.appendChild(clipdesc);
      if (importlist[imports].uploaded) {var importaudio = new Audio;
      importaudio.style = 'width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px';
      importaudio.controls = true;
      importaudio.innerHTML = (`<source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.mp3" type="audio/mp3"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.aac" type="audio/aac"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.flac" type="audio/flac">`)
      clipdiv.appendChild(importaudio);}else{}
      document.getElementById("audioClips").appendChild(clipdiv);
    Array.from(document.getElementsByTagName('audio')).map((p) => new Plyr(p, {controls:['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'download'],settings:['captions', 'quality', 'speed', 'loop'],toggleInvert:false,volume:0.75,invertTime:false,storage:false,loop:{active:true}}));
console.log=(importlist[imports]);}
while(importlist[imports+1] && (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-1) + (new URLSearchParams(window.location.search).get('start')-0) - imports !== 0)}
if (new URLSearchParams(window.location.search).get('id')) {
if (document.getElementById('importnavnext')){document.getElementById('importnavnext').remove()};
if (document.getElementById('importnavprev')){document.getElementById('importnavprev').remove()};
document.getElementsByClassName('navigation-container')[0].children[1].href = '/imports'
do {imports++
   importicon = null
   var importaudio = null;
   var clipimg = null;
if(importlist[imports].creation_id == new URLSearchParams(window.location.search).get('id')){var clipimg = document.createElement('img');
      clipimg.style = "height:36px;width:36px;position:absolute";
      clipimg.onerror = function onerror(event) {
    this.src = 'https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10'
}
      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc";
      clipname.className = "global-post-label";
      clipname.textContent = importlist[imports].import_name;
      var clipstatus = document.createElement('img');
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "schedule"
      var clipdesc = document.createElement('a');
      clipdesc.className = "global-post-details";
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.style = "background:#222";
      if (importlist[imports].imgHash) {importlist[imports].img = [{"hash": importlist[imports].imgHash,"color": "#000000"}];importlist[imports].imgHash = null}
      clipname.style = "font-size:16px;line-height:20px;color:#ccc;padding:0 10px 10px 0;background:#222;border-radius:0 0 10px 0";
      clipdesc.style = "margin-left:40px";
      clipname.href = ("https://indreams.me/element/" + importlist[imports].creation_id);
      clipname.rel = 'noreferrer noopener';
      clipname.target = '_blank';
      clipimg.style = (`aspect-ratio:16/9;width:-webkit-fill-available;background-image:url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_11'),url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_7');background-color:` + importlist[imports].img[0].color + `;background-size: cover;background-position: center;`);
      clipimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==';
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipimg);
      if (importlist[imports].import_iconoverride) {clipstatus.textContent = importlist[imports].import_iconoverride}else{}
      if (importlist[imports].uploaded) {var importaudio = new Audio;
      importaudio.style = 'width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px';
      importaudio.controls = true;
      importaudio.innerHTML = (`<source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.mp3" type="audio/mp3"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.aac" type="audio/aac"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.flac" type="audio/flac">`)
      clipdiv.appendChild(importaudio);}else{}
      document.getElementById("audioClips").appendChild(clipdiv);
    Array.from(document.getElementsByTagName('audio')).map((p) => new Plyr(p, {controls:['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'download'],settings:['captions', 'quality', 'speed', 'loop'],toggleInvert:false,volume:0.75,invertTime:false,storage:false,loop:{active:true}}));
console.log=(importlist[imports]);}}
while(importlist[imports+1] && importlist[imports].creation_id !== new URLSearchParams(window.location.search).get('id'))};})()})();
