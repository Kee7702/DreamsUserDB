const params=new URLSearchParams(window.location.search);document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]||(params.get("limit")?document.cookie="limit="+params.get("limit")+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString():document.cookie="limit=10; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),params.get("limit")&&(document.cookie="limit="+params.get("limit")+"; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),(async()=>{importlist=await (await fetch("https://raw.githubusercontent.com/Kee7702/DreamsUserDB/database/imports/list")).json(),imports=0,(async()=>{if(userdb=await (await fetch("https://raw.githubusercontent.com/Kee7702/DreamsUserDB/database/users")).json(),importlist&&(importlist[document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)]?document.getElementById("importnavnext").href="/imports?start="+(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)):document.getElementById("importnavnext").remove(),importlist[params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)]?document.getElementById("importnavprev").href="/imports?start="+(params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)):document.getElementById("importnavprev").remove()),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0==0&&document.getElementsByClassName("navigation-container")[1].remove(),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0<0&&(document.cookie="limit=10; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),params.get("id")){document.getElementById("importnavnext")&&document.getElementById("importnavnext").remove(),document.getElementById("importnavprev")&&document.getElementById("importnavprev").remove(),-1!==document.referrer.search("imports")&&(document.getElementsByClassName("navigation-container")[0].children[1].href="/imports");do{imports++,importlist[imports].import_name.length>64&&(importlist[imports].import_name="Unnamed "+(parseInt(importlist[imports].img[0].color.substring(1),16)+parseInt(importlist[imports].creation_id,36)).toString(36)),importicon=null;var d=null,a=null;if(((parseInt(importlist[imports].import_name.replaceAll(' ',''),36))+parseInt(importlist[imports].creation_id,36)).toString(16).slice(0,15)+((importlist.length)-imports)==params.get("id")){var a=document.createElement("img");a.style="height:36px;width:36px;position:absolute",a.onerror=function(a){this.src="https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10"};var b=document.createElement("a");b.style="font-size:16px;line-height:20px;color:#ccc",b.className="global-post-label",b.textContent=importlist[imports].import_name;var e=document.createElement("img"),c=document.createElement("div");if(c.className="global-annoucement",c.style="background:#222",importlist[imports].imgHash&&(importlist[imports].img=[{hash:importlist[imports].imgHash,color:"#000000"}],importlist[imports].imgHash=null),b.style="white-space:nowrap;font-size:14px;line-height:20px;color:#ccc;padding:0 10px 10px 24px;background:#222;border-radius:0 0 10px 0",b.href="https://indreams.me/element/"+importlist[imports].creation_id,b.rel="noreferrer noopener",b.target="_blank",a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYGAAAAAFAAGKM+MAAAAAAElFTkSuQmCC",a.style="height:100%;width:-webkit-fill-available;background-image:url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_11'),url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_7');background-color:"+importlist[imports].img[0].color+";background-size: cover;background-position: center;",e.src="https://cdn.indreams.me/"+userdb[importlist[imports].userID].imphash+"_10",e.onerror=function(a){this.src="https://assets.indreams.me/images/users/default.png"},e.style="height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);position:absolute;z-index:1",c.appendChild(e),c.appendChild(b),c.appendChild(a),importlist[imports].import_iconoverride&&(e.textContent=importlist[imports].import_iconoverride),importlist[imports].source){var d=new Audio;d.style="width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px",d.controls=!0,d.preload="none",d.src='https://drive.google.com/uc?confirm=t&export=download&id='+importlist[imports].source,c.appendChild(d)}document.getElementById("audioClips").appendChild(c),Array.from(document.getElementsByTagName("audio")).map(a=>new Plyr(a,{controls:["play-large","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen","download"],settings:["captions","quality","speed","loop"],toggleInvert:!1,volume:.75,invertTime:!1,storage:!1,loop:{active:!0},mediaMetadata:{title:importlist[imports].import_name,artist:userdb[importlist[imports].userID].username,album:"Audio Import Database",artwork:[{src:"https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_10",sizes:"256x256",type:"image/jpeg"},{src:"https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_9",sizes:"512x512",type:"image/jpeg"}]}})),document.getElementsByTagName("img")[1].onclick=function(){document.getElementsByTagName("audio")[0].plyr.togglePlay()},console.info("%c"+importlist[imports].import_name+" by "+userdb[importlist[imports].userID].username+(Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?", Completed "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?", Completed less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?", Completed on "+new Date(importlist[imports].import_date).toDateString():", Completed on "+importlist[imports].import_date),"color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:" + importlist[imports].img[0].color)}importlist[imports+1]||""!=document.getElementById("audioClips").innerHTML||(document.getElementById("audioClips").innerHTML='<div class="global-annoucement" style="background: rgb(34, 34, 34);"><a>404 Not Found<br>An import with the specified ID'+decodeURI(" %27"+params.get("id")+"%27 ")+"was not found in the database.</a></div>")}while(importlist[imports+1]&&((parseInt(importlist[imports].import_name.replaceAll(' ',''),36))+parseInt(importlist[imports].creation_id,36)).toString(16).slice(0,15)+((importlist.length)-imports)!==params.get("id"))}})()})()
