const params=new URLSearchParams(window.location.search);-1!==window.location.pathname.search("imports")?(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]||(params.get("limit")?document.cookie="limit="+params.get("limit")+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString():document.cookie="limit=10; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),params.get("limit")&&(document.cookie="limit="+params.get("limit")+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),(async()=>{importlist=await (await fetch("/data/i/list")).json(),imports=params.get("start")-0,(async()=>{if(userdb=await (await fetch("/data/u/list")).json(),importlist&&(importlist[document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)]?document.getElementById("importnavnext").href="/imports?start="+(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)):document.getElementById("importnavnext").remove(),importlist[params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)]?document.getElementById("importnavprev").href="/imports?start="+(params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)):document.getElementById("importnavprev").remove()),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0==0&&document.getElementsByClassName("navigation-container")[1].remove(),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0<0&&(document.cookie="limit=10; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),!params.get("id")){document.getElementById("audioImports").innerHTML="Audio Imports";do{imports++,importlist[imports].import_name.length>64&&(importlist[imports].import_name="Unnamed "+(parseInt(importlist[imports].img[0].color.substring(1),16)+parseInt(importlist[imports].creation_id,36)).toString(36)),importicon=null;var f=null,d=document.createElement("img");d.style="height:36px;width:36px;position:absolute",d.onerror=function(a){this.src="https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10"};var c=document.createElement("a");c.style="font-size:16px;line-height:20px;color:#ccc",c.className="global-post-label",c.textContent=importlist[imports].import_name;var e=document.createElement("img");e.className="global-post-icon";var a=document.createElement("a");a.className="global-post-details";var b=document.createElement("div");if(b.className="global-annoucement",b.style="background:#fff2",importlist[imports].imgHash&&(importlist[imports].img=[{hash:importlist[imports].imgHash,color:"#000000"}],importlist[imports].imgHash=null),c.style="font-size:16px;line-height:27px;color:#ccc;margin-left:54px;margin-top:5px",a.style="margin-left:54px;margin-bottom:10px;margin-top:3px",b.appendChild(d),c.href="/imports?id="+importlist[imports].browse_id,d.style="transform:scale(1.103448275862069);height: 50px;width: 50px;position: absolute;background-image:url('/assets/images/cardOverlay.png'),url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_2'),url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_7');-webkit-mask-image:url('/assets/images/cardMaskImage.png');-webkit-mask-size:cover;border-radius:50%;background-color:"+importlist[imports].img[0].color+";background-size: cover;background-position: center;",d.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==","Invalid Date"==new Date(importlist[imports].import_date).toString()&&(importlist[imports].import_date=new Date(importlist[imports].import_date.split(" ")[0].substring(0,3)+" "+importlist[imports].import_date.split(" ")[1].substring(0,importlist[imports].import_date.split(" ")[1].length-3)+" "+importlist[imports].import_date.split(" ")[2]).toJSON()),Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?a.textContent="Published less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?a.textContent=new Date(importlist[imports].import_date).toDateString():a.textContent=importlist[imports].import_date,e.src=(userdb[importlist[imports].userID].impstored?'/data/imp/':('https://cdn.indreams.me/'))+userdb[importlist[imports].userID].imphash+"_10",e.onerror=function(a){this.src="https://assets.indreams.me/images/users/default.png"},e.style="height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);background:linear-gradient(#222c,#222c),url('"+(userdb[importlist[imports].userID].impstored?'/data/imp/':('https://cdn.indreams.me/'))+userdb[importlist[imports].userID].imphash+"_7');background-blend-mode:color-burn;background-size:21px",importlist[imports].import_iconoverride&&(e.textContent=importlist[imports].import_iconoverride),b.appendChild(c),b.appendChild(e),b.appendChild(a),importlist[imports].source){var f=new Audio;f.style="width: -webkit-fill-available;height: 27px;margin: 0;display: block;margin-top: 5px",f.controls=!0,f.src='https://drive.google.com/uc?confirm=t&export=download&id='+importlist[imports].source,b.appendChild(f)}document.getElementById("audioClips").appendChild(b),!importlist[imports+1]&&(Array.from(document.getElementsByTagName("audio")).map(a=>a.addEventListener('error', function(){this.src=this.src;this.play()}))),Array.from(document.getElementsByTagName("audio")).map(a=>new Plyr(a,{controls:["play-large","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen","download"],settings:["captions","quality","speed","loop"],toggleInvert:!1,volume:.75,invertTime:!1,storage:!1,loop:{active:!0},mediaMetadata:{title:"Audio Import Database",artist:"Multiple Creators",album:"",artwork:[{src:"https://cdn.indreams.me/f4e28ecea5d09b18c822c2ff0db10924_10",sizes:"256x256",type:"image/jpeg"},{src:"https://cdn.indreams.me/f4e28ecea5d09b18c822c2ff0db10924_9",sizes:"512x512",type:"image/jpeg"}]}})),console.info("%c"+importlist[imports].import_name+" by "+userdb[importlist[imports].userID].username+(Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?", Published less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?", Published on "+new Date(importlist[imports].import_date).toDateString():", Published on "+importlist[imports].import_date),"color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:" + importlist[imports].img[0].color)}while(importlist[imports+1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)-imports!=0)}if(params.get("id")){document.getElementById("audioImports").innerHTML="Import Player",document.getElementById("importnavnext")&&document.getElementById("importnavnext").remove(),document.getElementById("importnavprev")&&document.getElementById("importnavprev").remove(),-1!==document.referrer.search("imports")&&(document.getElementsByClassName("navigation-container")[0].children[1].href="/imports");do{imports++,importlist[imports].import_name.length>64&&(importlist[imports].import_name="Unnamed "+(parseInt(importlist[imports].img[0].color.substring(1),16)+parseInt(importlist[imports].creation_id,36)).toString(36)),importicon=null;var f=null,d=null;if(importlist[imports].browse_id==params.get("id")){var d=document.createElement("img");d.style="height:36px;width:36px;position:absolute",d.onerror=function(a){this.src="https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10"};var c=document.createElement("a");c.style="font-size:16px;line-height:20px;color:#ccc",c.className="global-post-label",c.textContent=importlist[imports].import_name;var e=document.createElement("img"),a=document.createElement("a");"Invalid Date"==new Date(importlist[imports].import_date).toString()&&(importlist[imports].import_date=new Date(importlist[imports].import_date.split(" ")[0].substring(0,3)+" "+importlist[imports].import_date.split(" ")[1].substring(0,importlist[imports].import_date.split(" ")[1].length-3)+" "+importlist[imports].import_date.split(" ")[2]).toJSON()),Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?a.textContent="Published less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?a.textContent=new Date(importlist[imports].import_date).toDateString():a.textContent=importlist[imports].import_date;var b=document.createElement("div");if(b.className="global-annoucement",b.style="background:#fff2",importlist[imports].imgHash&&(importlist[imports].img=[{hash:importlist[imports].imgHash,color:"#000000"}],importlist[imports].imgHash=null),c.style="font-size:16px;line-height:20px;color:#ccc;padding:0 10px 10px 24px;background:#222;border-radius:0 0 10px 0",a.style="font-size: 16px;line-height: 20px;color: rgb(204, 204, 204);position: absolute;margin-top: 341px;padding: 10px 10px 0 0;background: rgb(34, 34, 34);border-radius: 0 10px 0 0",c.href="https://indreams.me/element/"+importlist[imports].creation_id,c.rel="noreferrer noopener",c.target="_blank",d.style="width:-webkit-fill-available;background-image:url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_11'),url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_7');background-color:"+importlist[imports].img[0].color+";background-size: cover;background-position: center;height: 370px",d.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVChTYxgFo4BywMAAAAJJAAEz00C7AAAAAElFTkSuQmCC",e.src=(userdb[importlist[imports].userID].impstored?'/data/imp/':('https://cdn.indreams.me/'))+userdb[importlist[imports].userID].imphash+"_10",e.onerror=function(a){this.src="https://assets.indreams.me/images/users/default.png"},e.style="height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);position:absolute;z-index:1",b.appendChild(a),b.appendChild(e),b.appendChild(c),b.appendChild(d),importlist[imports].import_iconoverride&&(e.textContent=importlist[imports].import_iconoverride),importlist[imports].source){var f=new Audio;f.style="width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px",f.controls=!0,f.src='https://drive.google.com/uc?confirm=t&export=download&id='+importlist[imports].source,b.appendChild(f)}document.getElementById("audioClips").appendChild(b),Array.from(document.getElementsByTagName("audio")).map(a=>a.addEventListener('error', function(){this.src=this.src;this.play()})),Array.from(document.getElementsByTagName("audio")).map(a=>new Plyr(a,{controls:["play-large","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen","download"],settings:["captions","quality","speed","loop"],toggleInvert:!1,volume:.75,invertTime:!1,storage:!1,loop:{active:!0},mediaMetadata:{title:importlist[imports].import_name,artist:userdb[importlist[imports].userID].username,album:"Audio Import Database",artwork:[{src:"https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_10",sizes:"256x256",type:"image/jpeg"},{src:"https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_9",sizes:"512x512",type:"image/jpeg"}]}})),document.getElementsByTagName("img")[1].onclick=function(){document.getElementsByTagName("audio")[0].plyr.togglePlay()},console.info("%c"+importlist[imports].import_name+" by "+userdb[importlist[imports].userID].username+(Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?", Published less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?", Published on "+new Date(importlist[imports].import_date).toDateString():", Published on "+importlist[imports].import_date),"color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:" + importlist[imports].img[0].color)}importlist[imports+1]||""!=document.getElementById("audioClips").innerHTML||(document.getElementById("audioClips").innerHTML='<div class="global-annoucement" style="background:#fff2"><a>404 Not Found<br>An import with the specified ID'+decodeURI(" %27"+params.get("id")+"%27 ")+"was not found in the database.</a></div>")}while(importlist[imports+1]&&importlist[imports].browse_id!==params.get("id"))}})()})()):(async()=>{iddb=await (await fetch("/data/u/ids")).json(),document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]||(params.get("limit")?document.cookie="limit="+params.get("limit")+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString():document.cookie="limit=10; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),params.get("limit")&&(document.cookie="limit="+params.get("limit")+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),document.getElementById("imp").onerror=function(a){this.src="https://assets.indreams.me/images/users/default.png"},document.cookie.split("; ").find(a=>a.startsWith("auth="))&&(document.cookie="user="+document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].split(document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1][document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].length-10]+document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].substring(document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].length-9))[0]+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString(),document.cookie="auth=; Max-Age=0;"),params.get("user")&&(document.cookie="user="+params.get("user")+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),(async()=>{importlist=await (await fetch("/data/u/"+iddb[document.cookie.split("; ").find(a=>a.startsWith("user="))?.split("=")[1]])).json(),imports=params.get("start")-0,(async()=>{userdb=await (await fetch("/data/u/list")).json(),document.getElementById("imp").onerror=function(a){this.src="https://assets.indreams.me/images/users/default.png"},""+importlist[0]=="undefined"&&(importlist[0]={}),importlist[1]&&(importlist[document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)+1]?""+params.get("json")=="null"?""+params.get("commit")=="null"?document.getElementById("importnavnext").href="/?start="+(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)):document.getElementById("importnavnext").href="/?start="+(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0))+"&commit="+commitKey:document.getElementById("importnavnext").href="/?start="+(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0))+"&json="+encodeURI(params.get("json")):document.getElementById("importnavnext").remove(),importlist[params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)]?""+params.get("json")=="null"?""+params.get("commit")=="null"?document.getElementById("importnavprev").href="/?start="+(params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)):document.getElementById("importnavprev").href="/?start="+(params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0))+"&commit="+commitKey:document.getElementById("importnavprev").href="/?start="+(params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0))+"&json="+encodeURI(params.get("json")):document.getElementById("importnavprev").remove(),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0==0&&document.getElementsByClassName("navigation-container")[1].remove(),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0<0&&(document.cookie="limit=10; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),document.getElementById("audioImports").innerHTML="Audio Imports"),importlist[1]||document.getElementById("audioClipsContainer").remove(),void 0==importlist[0].importLimit&&(importlist[0].importLimit=60),document.getElementById("imp").src=(importlist[0].impstored?'/data/imp/':('https://cdn.indreams.me/'))+importlist[0].imphash+"_9",document.getElementById("username").innerHTML=importlist[0].username,document.getElementById("username").href="//indreams.me/"+importlist[0].username,document.getElementById("username").rel="noreferrer noopener",document.getElementById("username").target="_blank",document.getElementById("importCount").innerHTML=JSON.stringify(importlist).split('"import_date"').length-1,document.getElementById("importLimit").innerHTML=Math.floor((importlist[0].importLimit-0+((JSON.stringify(importlist).split('"import_date"').length-1)*10-0))/60)+"m "+(importlist[0].importLimit-0+((JSON.stringify(importlist).split('"import_date"').length-1)*10-0))%60+"s",document.getElementById("importTime").innerHTML=Math.floor((JSON.stringify(importlist).split('"import_date"').length-1)*10/60)+"m "+(JSON.stringify(importlist).split('"import_date"').length-1)*10%60+"s",document.getElementById("userLevel").className=document.getElementById("userLevel").className+" persona "+importlist[0].level[0].persona,document.getElementById("userLevel").innerHTML=importlist[0].level[0].level+(" "+importlist[0].level[0].persona[0]).toUpperCase()+importlist[0].level[0].persona.substring(1),document.getElementById("maxRequestsD").innerHTML=Math.floor((JSON.stringify(importlist).split('"import_date"').length-1)/10*3)+1,document.getElementById("maxRequestsW").innerHTML=Math.floor((JSON.stringify(importlist).split('"import_date"').length-1)/3*3)+3,document.getElementById("maxRequestsM").innerHTML=Math.floor((JSON.stringify(importlist).split('"import_date"').length-1)/3*4)+12,document.getElementById("maxRequestsY").innerHTML=Math.floor((JSON.stringify(importlist).split('"import_date"').length-1)*7)+35,document.getElementById("pendingLimit").innerHTML=Math.floor((JSON.stringify(importlist).split('"import_date"').length-1)/2)+1,document.getElementById("pendingRequests").innerHTML=importlist.length-JSON.stringify(importlist).split('"import_date"').length,importlist[0].verified && (Array.from(document.getElementsByClassName('home-content-container userlimits')).map(a=>a.remove()),v=document.createElement('a'),v.style=`font-family: 'Material Icons';font-size: 24px;line-height: 44px;`,v.textContent='verified_user',document.getElementsByClassName('version-container dreamsdb impusername-container')[0].appendChild(v),document.getElementById('username').style='margin-left:32px');do{params.get("start")&&document.getElementById("audioClipsContainer").scrollIntoView(),imports++,importlist[imports].import_name.length>64&&(importlist[imports].import_name="Unnamed "+(parseInt(importlist[imports].img[0].color.substring(1),16)+parseInt(importlist[imports].creation_id,36)).toString(36)),importicon=null;var d=null,f=document.createElement("img"),c=document.createElement("a");c.style="font-size:16px;line-height:20px;color:#ccc",c.className="global-post-label",c.textContent=importlist[imports].import_name;var e=document.createElement("a");e.style="line-height:20px",e.className="global-post-icon",e.textContent="schedule";var a=document.createElement("a");a.className="global-post-details";var b=document.createElement("div");if(b.className="global-annoucement",b.style="background:#fff2",importlist[imports].import_date?(importlist[imports].imgHash&&(importlist[imports].img=[{hash:importlist[imports].imgHash,color:"#000000"}],importlist[imports].imgHash=null),c.style="font-size:16px;line-height:27px;color:#ccc;margin-left:54px;margin-top:5px",a.style="margin-left:54px;margin-bottom:10px;margin-top:3px",b.appendChild(f),c.href="/imports?id="+importlist[imports].browse_id,f.style="transform:scale(1.103448275862069);height: 50px;width: 50px;position: absolute;background-image:url('/assets/images/cardOverlay.png'),url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_2'),url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_7');-webkit-mask-image:url('/assets/images/cardMaskImage.png');-webkit-mask-size:cover;border-radius:50%;background-color:"+importlist[imports].img[0].color+";background-size: cover;background-position: center;",f.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==","Invalid Date"==new Date(importlist[imports].import_date).toString()&&(importlist[imports].import_date=new Date(importlist[imports].import_date.split(" ")[0].substring(0,3)+" "+importlist[imports].import_date.split(" ")[1].substring(0,importlist[imports].import_date.split(" ")[1].length-3)+" "+importlist[imports].import_date.split(" ")[2]).toJSON()),Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?a.textContent="Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?a.textContent="Published less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?a.textContent=new Date(importlist[imports].import_date).toDateString():a.textContent=importlist[imports].import_date,e.textContent="check"):(a.textContent="Pending Completion",e.textContent="schedule"),b.appendChild(c),b.appendChild(e),b.appendChild(a),importlist[imports].source){var d=new Audio;d.style="width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px",d.controls=!0,d.src='https://drive.google.com/uc?confirm=t&export=download&id='+importlist[imports].source,b.appendChild(d)}document.getElementById("audioClips").appendChild(b),!importlist[imports+1]&&(Array.from(document.getElementsByTagName("audio")).map(a=>a.addEventListener('error', function(){this.src=this.src;this.play()}))),Array.from(document.getElementsByTagName("audio")).map(a=>new Plyr(a,{controls:["play-large","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen","download"],settings:["captions","quality","speed","loop"],toggleInvert:!1,volume:.75,invertTime:!1,storage:!1,loop:{active:!0},mediaMetadata:{title:"Audio Import Database",artist:importlist[0].username,album:"",artwork:[{src:(importlist[0].impstored?'/data/imp':('https://cdn.indreams.me/'))+importlist[0].imphash+"_12",sizes:"512x512",type:"image/jpeg"}]}})),console.info("%c"+importlist[imports].import_name+" by "+importlist[0].username+(Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?", Published less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?", Published on "+new Date(importlist[imports].import_date).toDateString():", Published on "+importlist[imports].import_date),"color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:" + importlist[imports].img[0].color)}while(importlist[imports+1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)-imports!=0)})()})()})()
