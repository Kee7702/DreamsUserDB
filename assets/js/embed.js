const params=new URLSearchParams(window.location.search),(async()=>{importlist=await (await fetch("/data/i/list.json")).json(),imports=-1,(async()=>{if(userdb=await (await fetch("/data/u/list.json")).json(),importlist&&(importlist[document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)]?document.getElementById("importnavnext").href="/imports?start="+(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0+(params.get("start")-0)):document.getElementById("importnavnext").remove(),importlist[params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)]?document.getElementById("importnavprev").href="/imports?start="+(params.get("start")-0-(document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0)):document.getElementById("importnavprev").remove()),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0==0&&document.getElementsByClassName("navigation-container")[1].remove(),document.getElementsByClassName("navigation-container")[1]&&document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1]-0<0&&(document.cookie="limit=45; expires="+new Date(new Date().valueOf()+31539999999).toGMTString()),params.get("id")){document.getElementById("importnavnext")&&document.getElementById("importnavnext").remove(),document.getElementById("importnavprev")&&document.getElementById("importnavprev").remove(),-1!==document.referrer.search("imports")&&(document.getElementsByClassName("navigation-container")[0].children[1].href="/imports");do{imports++,importlist[imports].import_name.length>64&&(importlist[imports].import_name="Unnamed "+(parseInt(importlist[imports].img[0].color.substring(1),16)+parseInt(importlist[imports].creation_id,36)).toString(36)),importicon=null;var d=null,a=null;if(importlist[imports].browse_id==params.get("id")){var a=document.createElement("img");a.style="height:36px;width:36px;position:absolute",a.onerror=function(a){this.src="https://cdn.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10"};var b=document.createElement("a");b.style="font-size:16px;line-height:20px;color:#ccc",b.className="global-post-label",b.textContent=importlist[imports].import_name;var e=document.createElement("img"),c=document.createElement("div");if(c.className="global-annoucement",c.style="background:#222",importlist[imports].imgHash&&(importlist[imports].img=[{hash:importlist[imports].imgHash,color:"#000000"}],importlist[imports].imgHash=null),b.style="white-space:nowrap;font-size:14px;line-height:20px;color:#ccc;padding:0 10px 10px 24px;background:#222;border-radius:0 0 10px 0",b.href="https://indreams.me/"+importlist[imports].creation_id,b.rel="noreferrer noopener",b.target="_blank",a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYGAAAAAFAAGKM+MAAAAAAElFTkSuQmCC",a.style="height:100%;max-height:inherit;width:100%;background-image:url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_11'),url('https://cdn.indreams.me/"+importlist[imports].img[0].hash+"_7');background-color:"+importlist[imports].img[0].color+";background-size: cover;background-position: center;",e.src=(userdb[importlist[imports].userID].impstored?'/data/imp/':('https://cdn.indreams.me/'))+userdb[importlist[imports].userID].imphash+"_10",e.onerror=function(a){this.src="https://assets.indreams.me/images/users/default.png"},e.style="height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);position:absolute;z-index:1",c.appendChild(e),c.appendChild(b),c.appendChild(a),importlist[imports].import_iconoverride&&(e.textContent=importlist[imports].import_iconoverride),importlist[imports].source){var e=document.createElement('div');e.style="padding:10px 0;background:#333;position:absolute;width:100%";var d=new Audio;d.style="width:100%;border-radius:10px",d.controls=!0,d.loop=!0,d.src='https://drive.google.com/uc?confirm=t&export=download&id='+importlist[imports].source,e.appendChild(d),c.appendChild(e)}document.getElementById("audioClips").appendChild(c),document.querySelector('audio').parentElement.style="width:100%;margin-top:"+(-20-document.querySelector('audio').offsetHeight)+"px;padding:10px 0;background:#333;position:absolute",Array.from(document.getElementsByTagName("audio")).map(a=>a.addEventListener('error', function(){this.cachedTime=this.currentTime;this.src=this.src;this.play();this.currentTime=this.cachedTime;this.cachedTime=null})),console.info("%c"+importlist[imports].import_name+" by "+userdb[importlist[imports].userID].username+(Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/31536e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/2592e6)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6048e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/864e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)>1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/36e5)?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)>=1?", Published "+Math.floor((new Date-new Date(importlist[imports].import_date))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(importlist[imports].import_date))/6e4)?", Published less than a minute ago":"Invalid Date"!==new Date(importlist[imports].import_date).toDateString()?", Published on "+new Date(importlist[imports].import_date).toDateString():", Published on "+importlist[imports].import_date),"color:#ccc;border-color:#fff2;padding:8px;font-family:'system-ui';font-weight:600;font-size:12px;border-radius:5px;margin:2px;border-width:5px;border-style:double;background-color:" + importlist[imports].img[0].color)}importlist[imports+1]||""!=document.getElementById("audioClips").innerHTML||(document.getElementById("audioClips").innerHTML='<div class="global-annoucement" style="background: rgb(34, 34, 34);"><a>404 Not Found<br>An import with the specified ID'+decodeURI(" %27"+params.get("id")+"%27 ")+"was not found in the database.</a></div>")}while(importlist[imports+1]&&importlist[imports].browse_id!==params.get("id"))}})()})()
