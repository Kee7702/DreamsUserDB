if (!document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]){if(new URLSearchParams(window.location.search).get('limit')){document.cookie = ("limit=" + new URLSearchParams(window.location.search).get('limit') + "; expires=Sun, 16 Jul 3567 06:23:41 GMT")}else{document.cookie = "limit=10; expires=Sun, 16 Jul 3567 06:23:41 GMT"}};if(new URLSearchParams(window.location.search).get('limit')){document.cookie = ("limit=" + new URLSearchParams(window.location.search).get('limit') + "; expires=Sun, 16 Jul 3567 06:23:41 GMT")};(async()=>{const res=await fetch(`https://raw.githubusercontent.com/Kee7702/DreamsUserDB/database/imports`);const json=await res.json();importlist=(json);imports=new URLSearchParams(window.location.search).get('start') -1;(async()=>{const res=await fetch(`https://raw.githubusercontent.com/Kee7702/DreamsUserDB/database/users`);const json=await res.json();userdb=(json);if(importlist){if (importlist[(((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0)))]){document.getElementById('importnavnext').href = '/imports?start=' + ((document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0) + (new URLSearchParams(window.location.search).get('start')-0));}else{document.getElementById('importnavnext').remove()};if (importlist[(((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)))]){document.getElementById('importnavprev').href = '/imports?start=' + ((new URLSearchParams(window.location.search).get('start')-0) - (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0));}else{document.getElementById('importnavprev').remove()};};if(document.getElementsByClassName('navigation-container')[1] && (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)==0){document.getElementsByClassName('navigation-container')[1].remove()}if(document.getElementsByClassName('navigation-container')[1] && (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-0)<0){document.cookie = "limit=10; expires=Sun, 16 Jul 3567 06:23:41 GMT"};if (!new URLSearchParams(window.location.search).get('name')){document.getElementById('audioImports').innerHTML = "Audio Imports";do {imports++;importicon = null;var importaudio = null;var clipimg = null;var clipimg = document.createElement('img');clipimg.style = "height:36px;width:36px;position:absolute";clipimg.onerror = function onerror(event){this.src = 'https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10'};var clipname = document.createElement('a');clipname.style = "font-size:16px;line-height:20px;color:#ccc";clipname.className = "global-post-label";clipname.textContent = importlist[imports].import_name;var clipstatus = document.createElement('img');clipstatus.className = "global-post-icon";var clipdesc = document.createElement('a');clipdesc.className = "global-post-details";var clipdiv = document.createElement('div');clipdiv.className = "global-annoucement";clipdiv.style = "background:#222";if (importlist[imports].imgHash){importlist[imports].img = [{"hash": importlist[imports].imgHash,"color": "#000000"}];importlist[imports].imgHash = null};clipname.style = "font-size:16px;line-height:20px;color:#ccc;margin-left:40px";clipdesc.style = "margin-left:40px";clipdiv.appendChild(clipimg);clipname.href = ("/imports?name=" + encodeURI(importlist[imports].import_name));clipimg.style = (`height: 36px;width: 36px;position: absolute;background-image:url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_9'),url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_7');background-color:` + importlist[imports].img[0].color + `;background-size: cover;background-position: center;`);clipimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==';if(new Date(importlist[imports].import_date).toString() == 'Invalid Date'){importlist[imports].import_date = new Date(importlist[imports].import_date.split(' ')[0].substring(0,3) + ' ' + importlist[imports].import_date.split(' ')[1].substring(0,importlist[imports].import_date.split(' ')[1].length-3) + ' ' + importlist[imports].import_date.split(' ')[2]).toJSON()};if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*365))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*365)) + ' years ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*365))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*365)) + ' year ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*30))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*30)) + ' months ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*30))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*30)) + ' month ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*7))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*7)) + ' weeks ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*7))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*7)) + ' week ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000)) + ' days ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000)) + ' day ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/24))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000/24)) + ' hours ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/24))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000/24)) + ' hour ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/1440))>=1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000/1440)) + ' minutes ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/1440))<1) {clipdesc.textContent = 'Completed less than a minute ago'}else{if(new Date(importlist[imports].import_date).toDateString() !== 'Invalid Date'){clipdesc.textContent = new Date(importlist[imports].import_date).toDateString()}else{clipdesc.textContent = importlist[imports].import_date}}}}}}}}}}}}};clipstatus.src = ('https://cdn.indreams.me/' + userdb[importlist[imports].userID].imphash + '_10');clipstatus.onerror = function onerror(event){this.src = 'https://assets.indreams.me/images/users/default.png'};clipstatus.style = 'height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);';if (importlist[imports].import_iconoverride){clipstatus.textContent = importlist[imports].import_iconoverride};clipdiv.appendChild(clipname);clipdiv.appendChild(clipstatus);clipdiv.appendChild(clipdesc);if (importlist[imports].uploaded){var importaudio = new Audio;importaudio.style = 'width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px';importaudio.controls = true;importaudio.innerHTML = (`<source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.mp3" type="audio/mp3"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.aac" type="audio/aac"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.flac" type="audio/flac">`);clipdiv.appendChild(importaudio);};document.getElementById("audioClips").appendChild(clipdiv);Array.from(document.getElementsByTagName('audio')).map((p) => new Plyr(p, {controls:['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'download'],settings:['captions', 'quality', 'speed', 'loop'],toggleInvert:false,volume:0.75,invertTime:false,storage:false,loop:{active:true},mediaMetadata:{title:'Audio Import Database', artist:'Multiple Creators', album:'', artwork: [{src: 'https://cdn.indreams.me/f4e28ecea5d09b18c822c2ff0db10924_10', sizes: '256x256', type: 'image/jpeg' },{ src: 'https://cdn.indreams.me/f4e28ecea5d09b18c822c2ff0db10924_9', sizes: '512x512', type: 'image/jpeg' }]}}));console.info(('%c'+importlist[imports].import_name+' by '+userdb[importlist[imports].userID].username), "color:#ccc;background:#111;padding:5px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px",importlist[imports]);}while(importlist[imports+1] && (document.cookie.split('; ').find(row => row.startsWith('limit='))?.split('=')[1]-1) + (new URLSearchParams(window.location.search).get('start')-0) - imports !== 0)};if (new URLSearchParams(window.location.search).get('name')){document.getElementById('audioImports').innerHTML = "Import Player";if (document.getElementById('importnavnext')){document.getElementById('importnavnext').remove()};if (document.getElementById('importnavprev')){document.getElementById('importnavprev').remove()};if(document.referrer.search('imports') !== -1){document.getElementsByClassName('navigation-container')[0].children[1].href = '/imports'};do {imports++;importicon = null;var importaudio = null;var clipimg = null;if(importlist[imports].import_name == new URLSearchParams(window.location.search).get('name')){var clipimg = document.createElement('img');clipimg.style = "height:36px;width:36px;position:absolute";clipimg.onerror = function onerror(event){this.src = 'https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10'};var clipname = document.createElement('a');clipname.style = "font-size:16px;line-height:20px;color:#ccc";clipname.className = "global-post-label";clipname.textContent = importlist[imports].import_name;var clipstatus = document.createElement('img');var clipdesc = document.createElement('a');if(new Date(importlist[imports].import_date).toString() == 'Invalid Date'){importlist[imports].import_date = new Date(importlist[imports].import_date.split(' ')[0].substring(0,3) + ' ' + importlist[imports].import_date.split(' ')[1].substring(0,importlist[imports].import_date.split(' ')[1].length-3) + ' ' + importlist[imports].import_date.split(' ')[2]).toJSON()};if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*365))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*365)) + ' years ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*365))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*365)) + ' year ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*30))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*30)) + ' months ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*30))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*30)) + ' month ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*7))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*7)) + ' weeks ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000*7))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000*7)) + ' week ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000)) + ' days ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000)) + ' day ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/24))>1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000/24)) + ' hours ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/24))==1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000/24)) + ' hour ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/1440))>=1) {clipdesc.textContent = ('Completed ' + Math.floor((new Date() - new Date(importlist[imports].import_date))/(86400000/1440)) + ' minutes ago')}else{if(Math.floor(Math.floor(new Date() - new Date(importlist[imports].import_date))/(86400000/1440))<1) {clipdesc.textContent = 'Completed less than a minute ago'}else{if(new Date(importlist[imports].import_date).toDateString() !== 'Invalid Date'){clipdesc.textContent = new Date(importlist[imports].import_date).toDateString()}else{clipdesc.textContent = importlist[imports].import_date}}}}}}}}}}}}};var clipdiv = document.createElement('div');clipdiv.className = "global-annoucement";clipdiv.style = "background:#222";if (importlist[imports].imgHash){importlist[imports].img = [{"hash": importlist[imports].imgHash,"color": "#000000"}];importlist[imports].imgHash = null};clipname.style = "font-size:16px;line-height:20px;color:#ccc;padding:0 10px 10px 24px;background:#222;border-radius:0 0 10px 0";clipdesc.style = "font-size: 16px;line-height: 20px;color: rgb(204, 204, 204);position: absolute;margin-top: 341px;padding: 10px 10px 0 0;background: rgb(34, 34, 34);border-radius: 0 10px 0 0";clipname.href = ("https://indreams.me/element/" + importlist[imports].creation_id);clipname.rel = 'noreferrer noopener';clipname.target = '_blank';clipimg.style = (`width:-webkit-fill-available;background-image:url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_11'),url('https://cdn.indreams.me/` + importlist[imports].img[0].hash + `_7');background-color:` + importlist[imports].img[0].color + `;background-size: cover;background-position: center;`);clipimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVChTYxgFo4BywMAAAAJJAAEz00C7AAAAAElFTkSuQmCC';clipstatus.src = ('https://cdn.indreams.me/' + userdb[importlist[imports].userID].imphash + '_10');clipstatus.onerror = function onerror(event){this.src = 'https://assets.indreams.me/images/users/default.png'};clipstatus.style = 'height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);position:absolute;z-index:1';clipdiv.appendChild(clipdesc);clipdiv.appendChild(clipstatus);clipdiv.appendChild(clipname);clipdiv.appendChild(clipimg);if (importlist[imports].import_iconoverride){clipstatus.textContent = importlist[imports].import_iconoverride};if (importlist[imports].uploaded){var importaudio = new Audio;importaudio.style = 'width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px';importaudio.controls = true;importaudio.innerHTML = (`<source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.mp3" type="audio/mp3"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.aac" type="audio/aac"><source src="https://raw.githubusercontent.com/Kee7702/DreamsUserDB/static/` + importlist[imports].import_name + `.flac" type="audio/flac">`);clipdiv.appendChild(importaudio);};document.getElementById("audioClips").appendChild(clipdiv);Array.from(document.getElementsByTagName('audio')).map((p) => new Plyr(p, {controls:['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'download'],settings:['captions', 'quality', 'speed', 'loop'],toggleInvert:false,volume:0.75,invertTime:false,storage:false,loop:{active:true},mediaMetadata:{title:importlist[imports].import_name, artist:userdb[importlist[imports].userID].username, album:'Audio Import Database', artwork: [{src: 'https://cdn.indreams.me/' + importlist[imports].img[0].hash + '_10', sizes: '256x256', type: 'image/jpeg' },{ src: 'https://cdn.indreams.me/' + importlist[imports].img[0].hash + '_9', sizes: '512x512', type: 'image/jpeg' }]}}));document.getElementsByTagName('img')[1].onclick = function onclick() {document.getElementsByTagName('audio')[0].plyr.togglePlay()};console.info(('%c'+importlist[imports].import_name+' by '+userdb[importlist[imports].userID].username), "color:#ccc;background:#111;padding:5px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px",importlist[imports]);}if(!importlist[imports+1] && document.getElementById('audioClips').innerHTML == '') {document.getElementById('audioClips').innerHTML = '<div class="global-annoucement" style="background: rgb(34, 34, 34);"><a>404 Not Found<br>An import with the specified name' + decodeURI(' %27' + new URLSearchParams(window.location.search).get('name') + '%27 ') + 'was not found in the database.</a></div>'}}while(importlist[imports+1] && importlist[imports].creation_id !== new URLSearchParams(window.location.search).get('name'))};})()})();
