if (!document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]) {if(new URLSearchParams(window.location.search).get('limit')){document.cookie = ("limit=" + new URLSearchParams(window.location.search).get('limit') + "; expires=Sun, 16 Jul 3567 06:23:41 GMT")}else{document.cookie = "limit=10; expires=Sun, 16 Jul 3567 06:23:41 GMT"}}else{}
if(new URLSearchParams(window.location.search).get('limit')){document.cookie = ("limit=" + new URLSearchParams(window.location.search).get('limit') + "; expires=Sun, 16 Jul 3567 06:23:41 GMT")}else{}

      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "importCount";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The amount of fulfilled import requests";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Import Count";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "importLimit";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The time limit for each new import";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Import Limit";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "importTime";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The amount time added to the import limit";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Import Time";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "userLevel";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The last observed level for this user";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Dreamer Level";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "maxRequestsD";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The request limit every day";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Daily Limit";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "maxRequestsW";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The request limit every week";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Weekly Limit";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "maxRequestsM";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The request limit every month";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Monthly Limit";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "maxRequestsY";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The request limit every year";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Yearly Limit";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "pendingLimit";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The limit of pending imports";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Pending Limit";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
      var statinfo = document.createElement('p');
      statinfo.className = "dreamsdb infostats";
      statinfo.textContent = "loop";
      statinfo.style = "font-family:'Material Icons'";
      statinfo.id = "pendingRequests";
      var statsubtitle = document.createElement('p');
      statsubtitle.className = "dreamsdb infotitle infodesc";
      statsubtitle.textContent = "The amount of pending imports";
      var stattitle = document.createElement('p');
      stattitle.className = "dreamsdb infotitle";
      stattitle.textContent = "Pending Requests";
      var stattitlecontainer = document.createElement('div');
      stattitlecontainer.className = "version-container";
      stattitlecontainer.appendChild(stattitle);
      stattitlecontainer.appendChild(statsubtitle);
      var statcontainerinner = document.createElement('div');
      statcontainerinner.className = "filedownload-container dreamsdb sectioninfo";
      statcontainerinner.appendChild(stattitlecontainer);
      statcontainerinner.appendChild(statinfo);
      var statcontainerouter = document.createElement('a');
      statcontainerouter.className = "home-content-image dreamsdb section";
      statcontainerouter.appendChild(statcontainerinner);
      document.getElementById("stats").appendChild(statcontainerouter)
document.getElementById("loadingstats").remove()

const ids = new URLSearchParams(window.location.search);

document.getElementById('imp').onerror = function onerror(event) {
    this.src = 'https://assets.indreams.me/images/users/default.png'
}

if(document.cookie.split('; ').find(row => row.startsWith('auth='))) {document.cookie = ("user=" + (document.cookie.split('; ').find(row => row.startsWith('auth='))?.split('=')[1]).split((document.cookie.split('; ').find(row => row.startsWith('auth='))?.split('=')[1][document.cookie.split('; ').find(row => row.startsWith('auth='))?.split('=')[1].length-10] + document.cookie.split('; ').find(row => row.startsWith('auth='))?.split('=')[1].substring(document.cookie.split('; ').find(row => row.startsWith('auth='))?.split('=')[1].length-9)))[0] + "; expires=Sun, 16 Jul 3567 06:23:41 GMT");document.cookie = 'auth=; Max-Age=0;';}else{}

if (ids.get('user')) {
    document.cookie = ("user=" + ids.get('user') + "; expires=Sun, 16 Jul 3567 06:23:41 GMT")
}

if (document.cookie.split('; ').find(row => row.startsWith('user='))) {if('' + ids.get('commit') == 'null') {commitKey='main'}else{commitKey=ids.get('commit')}
if ('' + ids.get('json') == 'null') {fetchURL = `https://raw.githubusercontent.com/Kee7702/DreamsUserDB/` + commitKey + `/assets/json/imports/user/` + document.cookie.split('; ').find(row => row.startsWith('user='))?.split('=')[1]}else{if ('' + ids.get('json').split('/')[2] == 'undefined') {if('' + ids.get('json').split('/')[1] == 'undefined'){fetchURL = `https://gist.githubusercontent.com/Kee7702/` + ids.get('json').split('/')[0] + '/raw'}else{fetchURL = `https://gist.githubusercontent.com/` + ids.get('json').split('/')[0] + '/' + ids.get('json').split('/')[1] + '/raw'}}else if(ids.get('json').split('/')[3]){fetchURL = `https://gist.githubusercontent.com/` + ids.get('json').split('/')[0] + '/' + ids.get('json').split('/')[1] + '/raw/' + ids.get('json').split('/')[2] + '/' + ids.get('json').split('/')[3]}else if(ids.get('json').split('/')[2]) {fetchURL = `https://gist.githubusercontent.com/` + ids.get('json').split('/')[0] + '/' + ids.get('json').split('/')[1] + '/raw/' + ids.get('json').split('/')[2]}else{fetchURL = `https://gist.githubusercontent.com/` + ids.get('json').split('/')[0] + ids.get('json').split('/')[1] + '/raw'}}
(async()=>{const res=await fetch(fetchURL);const json=await res.json();importlist=(json);imports=new URLSearchParams(window.location.search).get('start') - 0;(async()=>{const res=await fetch(`https://raw.githubusercontent.com/Kee7702/DreamsUserDB/main/assets/json/users`);const json=await res.json();userdb=(json);
document.getElementById('imp').onerror = function onerror(event) {
    this.src = 'https://assets.indreams.me/images/users/default.png'
}
if ('' + importlist[0] == 'undefined') {importlist[0] = {}}else{}
                 if(importlist[0].hasImports == true) {
if (importlist[(((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0)))+1]) {if('' + ids.get('json') == 'null') {if('' + ids.get('commit') == 'null') {document.getElementById('importnavnext').href = ('/?start=' + ((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0)));}else{document.getElementById('importnavnext').href = ('/?start=' + ((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0)) + '&commit=' + commitKey);}}else{document.getElementById('importnavnext').href = ('/?start=' + ((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0)) + '&json=' + encodeURI(ids.get('json')));}}else{document.getElementById('importnavnext').remove()};
if (importlist[(((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)))]) {if('' + ids.get('json') == 'null') {if('' + ids.get('commit') == 'null') {document.getElementById('importnavprev').href = ('/?start=' + ((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)));}else{document.getElementById('importnavprev').href = ('/?start=' + ((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)) + '&commit=' + commitKey);}}else{document.getElementById('importnavprev').href = ('/?start=' + ((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)) + '&json=' + encodeURI(ids.get('json')));}}else{document.getElementById('importnavprev').remove()};
      document.getElementById('audioImports').innerHTML = "Audio Imports";}
if (('' + importlist[1]) == 'undefined') {document.getElementById('audioClipsContainer').remove()}else{}
if (('' + importlist[0].level) == 'undefined') {importlist[0].level = [{}]}else{}
if (('' + userdb[importlist[0].userID].username) == 'undefined') {userdb[importlist[0].userID].username = 'Unknown'}else{}
if (('' + importlist[0].pendingRequests) == 'undefined') {importlist[0].pendingRequests = '0'}else{}
if (('' + importlist[0].level[0].persona) == 'undefined') {importlist[0].level[0].persona = 'unknown'}else{}
if (('blank' + importlist[0].level[0].persona) == 'blank') {importlist[0].level[0].persona = 'unknown'}else{}
if (('' + importlist[0].level[0].level) == 'undefined') {importlist[0].level[0].level = 0}else{}
if (('' + importlist[0].importLimit) == 'undefined') {importlist[0].importLimit = 0}else{}
document.getElementById('imp').src = ("https://cdn.indreams.me/" + userdb[importlist[0].userID].imphash + "_9")
document.getElementById('username').innerHTML = userdb[importlist[0].userID].username
document.getElementById('username').href = '//indreams.me/' + userdb[importlist[0].userID].username
document.getElementById('username').rel = 'noreferrer noopener'
document.getElementById('username').target = '_blank'
document.getElementById('importCount').innerHTML = importlist.length-1
document.getElementById('importCount').removeAttribute('style')
document.getElementById('importLimit').innerHTML = Math.floor(((importlist[0].importLimit-0)+(((importlist.length-1)*10)-0))/60) + 'm ' + (((importlist[0].importLimit-0)+(((importlist.length-1)*10)-0)) % 60) + 's'
document.getElementById('importLimit').removeAttribute('style')
document.getElementById('importTime').innerHTML = Math.floor(((importlist.length-1)*10)/60) + 'm ' + (((importlist.length-1)*10) % 60) + 's'
document.getElementById('importTime').removeAttribute('style')
document.getElementById('userLevel').className = (document.getElementById('userLevel').className + ' persona ' + importlist[0].level[0].persona)
document.getElementById('userLevel').innerHTML = importlist[0].level[0].level + (' ' + importlist[0].level[0].persona[0]).toUpperCase() + (importlist[0].level[0].persona).substring(1)
document.getElementById('userLevel').removeAttribute('style')
document.getElementById('maxRequestsD').innerHTML = Math.floor(((importlist.length-1)/10) *3) + 1
document.getElementById('maxRequestsD').removeAttribute('style')
document.getElementById('maxRequestsW').innerHTML = Math.floor(((importlist.length-1)/3) *3) + 3
document.getElementById('maxRequestsW').removeAttribute('style')
document.getElementById('maxRequestsM').innerHTML = Math.floor(((importlist.length-1)/3) *4) + 12
document.getElementById('maxRequestsM').removeAttribute('style')
document.getElementById('maxRequestsY').innerHTML = Math.floor((importlist.length-1)*7) + 35
document.getElementById('maxRequestsY').removeAttribute('style')
document.getElementById('pendingLimit').innerHTML = Math.floor((importlist.length-1)/2) + 1
document.getElementById('pendingLimit').removeAttribute('style')
document.getElementById('pendingRequests').innerHTML = importlist[0].pendingRequests
document.getElementById('pendingRequests').removeAttribute('style')
do{imports++
   importicon = null
   var importaudio = null;
   var clipimg = null;
      var clipimg = document.createElement('img');
      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc";
      clipname.className = "global-post-label";
      clipname.textContent = importlist[imports].import_name;
      var clipstatus = document.createElement('a');
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "schedule"
      var clipdesc = document.createElement('a');
      clipdesc.className = "global-post-details";
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.style = "background:#222";
      if (importlist[imports].import_status == "0") {clipdesc.textContent = "Pending Completion";clipstatus.textContent = "schedule"}else{}
      if (importlist[imports].import_status == "1") {if (importlist[imports].imgHash) {importlist[imports].img = [{"hash": importlist[imports].imgHash,"color": "#000000"}];importlist[imports].imgHash = null}clipname.style = "font-size:16px;line-height:20px;color:#ccc;margin-left:40px";clipdesc.style = "margin-left:40px";clipdiv.appendChild(clipimg);clipname.href = ("/imports?id=" + importlist[imports].creation_id);clipimg.style = (`height: 36px;width: 36px;position: absolute;background-image:url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_9'),url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_7');background-color:` + importlist[imports].img[0].color + `;background-size: cover;background-position: center;`);clipimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==';clipdesc.textContent = ("Completed on " + importlist[imports].import_date);clipstatus.textContent = "check"}else{}
      if (importlist[imports].import_status == "2") {clipdesc.textContent = "Import Removed";clipstatus.textContent = "close"}else{}
      if (importlist[imports].import_status == "3") {clipstatus.textContent = "campaign"}else{}
      if (importlist[imports].import_status == "3" && importlist[imports].customHTML) {clipdesc.innerHTML = importlist[imports].customHTML}else{}
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
while(importlist[imports+1] && (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0) - imports !== 0);})()})();
}
else {}
