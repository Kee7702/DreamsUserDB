const params = new URLSearchParams(window.location.search);
-1 !== window.location.pathname.search("imports") ? (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] || (params.get("limit") ? document.cookie = "limit=" + params.get("limit") + "; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString() : document.cookie = "limit=45; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString()),
params.get("limit") && (document.cookie = "limit=" + params.get("limit") + "; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString()),
(async()=>{
    importlist = await (await fetch("/data/i/list.json")).json(),
    imports = params.get("start") - 1,
    (async()=>{
        if (userdb = await (await fetch("/data/u/list.json")).json(),
        importlist && (importlist[document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0)] ? document.getElementById("importnavnext").href = "/imports?start=" + (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0)) : document.getElementById("importnavnext").remove(),
        importlist[params.get("start") - 0 - (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0)] ? document.getElementById("importnavprev").href = "/imports?start=" + (params.get("start") - 0 - (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0)) : document.getElementById("importnavprev").remove()),
        document.getElementsByClassName("navigation-container")[2] && document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 == 0 && document.getElementsByClassName("navigation-container")[2].remove(),
        document.getElementsByClassName("navigation-container")[2] && document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 < 0 && (document.cookie = "limit=45; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString()),
        !params.get("id") && !params.get("name")) {
            document.getElementById("audioImports").innerHTML = "Audio Imports";
            do {
                imports++,
                document.getElementById("audioClips").innerHTML += `<div style="margin:4px;padding:10px;display:inline-grid;text-align:center;background:${importlist[imports].img[0].color || '#333'};border-radius:10px;max-width:calc(100% - 28px);width:480px;height:120px;">
  ${Object.keys(importlist[imports].img[0]).length == 2 && '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==" style="transform:scale(1.10345);height:50px;width:50px;position: absolute;background-image:url(&quot;/assets/images/cardOverlay.png&quot;), url(&quot;https://cdn-prod.puprod.indreams.me/' + importlist[imports].img[0].hash + '_2&quot;), url(&quot;https://cdn-prod.puprod.indreams.me/' + importlist[imports].img[0].hash + '_7&quot;);-webkit-mask-image:url(&quot;/assets/images/cardMaskImage.png&quot;);-webkit-mask-size:cover;border-radius:50%;background-color:' + importlist[imports].img[0].color + ';background-size:cover;background-position:centercenter;">' || ''}
  <a class="global-post-label"${importlist[imports].browse_id && importlist[imports].creation_id && ' href="/imports?id=' + importlist[imports].browse_id + '"'} style="font-size:16px;line-height:27px;color:#ccc ${importlist[imports].import_date && ';margin-left:54px' || ''};margin-top:18px;font-family:Poppins;">${importlist[imports].import_name}</a>
  <img class="global-post-icon" src="https://cdn-prod.puprod.indreams.me/${userdb[importlist[imports].userID].imphash}_10" onerror="this.src='https://assets.indreams.me/images/users/default.png'" title="${userdb[importlist[imports].userID].username}" style="height: 20px; width: 20px; line-height: 20px; transform: scale(2) rotate(-5deg);">
  <a class="global-post-details" style="${importlist[imports].import_date && 'margin-left:54px;' || ''}position:absolute;margin-top:4px;">${importlist[imports].import_date || 'Pending Completion'}</a>
  ${importlist[imports].source && '<div style="align-self:flex-end"><audio src="https://audio.dreams.kee7702.tk/' + importlist[imports].source + '.mp3" controls="" preload="none" loop="" style="width:100%;margin:4px 0"></audio></div>' || importlist[imports].sound_id && '<div style="align-self:flex-end"><audio src="https://audio.dreams.kee7702.tk/' + importlist[imports].sound_id.replaceAll('-', '/') + '.ogg" controls="" preload="none" loop="" style="width:100%;margin:4px 0"></audio></div>' || '<a style="padding: 12px;background: #fff2;font-size:16px;line-height: 30px;color:#CCC;font-family:Poppins;border-radius: 16px;height: 30px;align-self: flex-end;margin: 4px 0;">No Audio File</a>'}
</div>`
            } while (importlist[imports + 1] && document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 1 + (params.get("start") - 0) - imports != 0)
        }
        if (params.get("id") || params.get("name")) {
            document.getElementById("audioImports").innerHTML = "Import Player",
            document.getElementById("importnavnext") && document.getElementById("importnavnext").remove(),
            document.getElementById("importnavprev") && document.getElementById("importnavprev").remove();
            do {
                imports++,
                importlist[imports].import_name.length > 64 && (importlist[imports].import_name = "Unnamed " + (parseInt(importlist[imports].img[0].color.substring(1), 16) + parseInt(importlist[imports].creation_id, 36)).toString(36)),
                importicon = null;
                var f = null
                  , d = null;
                if (importlist[imports].browse_id && importlist[imports].browse_id == params.get("id") || importlist[imports].import_name && importlist[imports].import_name == params.get("name")) {
                    var d = document.createElement("img");
                    d.style = "height:36px;width:36px;position:absolute",
                    d.onerror = function(a) {
                        this.src = "https://cdn-prod.puprod.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10"
                    }
                    ;
                    var c = document.createElement("a");
                    c.style = "font-size:16px;line-height:20px;color:#ccc",
                    c.className = "global-post-label",
                    c.textContent = importlist[imports].import_name;
                    var e = document.createElement("img");
                    if(importlist[imports].import_date){
                        var a = document.createElement("a")
                            a.textContent = importlist[imports].import_date;
                    a.style = `font-size: 16px;line-height: 20px;color: rgb(204, 204, 204);position: absolute;margin-top: 310px;padding: 10px 10px;background:${importlist[imports].img[0].color || '#333'};border-radius: 0 10px 0 0`};
                    var b = document.createElement("div");
                    if (b.className = "global-post-container",
                    b.style = `background:${importlist[imports].img[0].color || '#333'};margin-top:8px`,
                    importlist[imports].imgHash && (importlist[imports].img = [{
                        hash: importlist[imports].imgHash,
                        color: "#000000"
                    }],
                    importlist[imports].imgHash = null),
                    c.style = `font-size:16px;line-height:20px;color:#ccc;padding:0 10px 10px 24px;background:${importlist[imports].img[0].color || '#333'};border-radius:0 0 10px 0;z-index:1`
                        ,
                    c.rel = "noreferrer noopener",
                    c.target = "_blank",
                    d.style = "width:100%;background-image:url('https://cdn-prod.puprod.indreams.me/" + (importlist[imports].img[0].hash || '52b7d5cfd294eb16d10ae91e674640fd') + "_11'),url('https://cdn-prod.puprod.indreams.me/" + (importlist[imports].img[0].hash || '52b7d5cfd294eb16d10ae91e674640fd') + "_7');background-color:" + importlist[imports].img[0].color + ";background-size: cover;background-position: center;height: 480px",
                    d.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVChTYxgFo4BywMAAAAJJAAEz00C7AAAAAElFTkSuQmCC",
                    e.src = 'https://cdn-prod.puprod.indreams.me/' + userdb[importlist[imports].userID].imphash + "_10",
                    e.onerror = function(a) {
                        this.src = "https://assets.indreams.me/images/users/default.png"
                    }
                    ,
                    e.style = "height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);position:absolute;z-index:2",
                    (importlist[imports].import_date&&b.appendChild(a)),
                        (importlist[imports].creation_id&&(c.href = ("https://indreams.me/" + importlist[imports].creation_id))),
                    b.appendChild(e),
                    b.appendChild(c),
                    b.appendChild(d),
                    importlist[imports].source) {
                        var f = new Audio;
                        f.style = "width:100%;border-radius:10px;margin-top:10px",
                        f.controls = !0,
                        f.loop = !0,
                        f.preload = "none",
                        f.src = 'https://audio.dreams.kee7702.tk/' + importlist[imports].source + '.mp3',
                        b.appendChild(f)
                    } else if (importlist[imports].sound_id) {
                        var f = new Audio;
                        f.style = "width:100%;border-radius:10px;margin-top:10px",
                        f.controls = !0,
                        f.loop = !0,
                        f.preload = "none",
                        f.src = 'https://audio.dreams.kee7702.tk/' + importlist[imports].sound_id.replaceAll('-', '/') + '.ogg',
                        b.appendChild(f)
                    }
                    document.getElementById("audioClips").appendChild(b)
                }
                importlist[imports + 1] || "" != document.getElementById("audioClips").innerHTML || (document.getElementById("audioClips").innerHTML = '<div class="global-post-container" style="background:#333;margin-top:8px"><a>404 Not Found<br>An import with the specified ID' + decodeURI(" %27" + params.get("id") + "%27 ") + "was not found in the database.</a></div>")
            } while (importlist[imports + 1] && importlist[imports].browse_id !== params.get("id") && importlist[imports].import_name !== params.get("name"))
        }
    }
    )()
}
)()) : (async()=>{
    iddb = await (await fetch("/data/u/ids.json")).json(),
    document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] || (params.get("limit") ? document.cookie = "limit=" + params.get("limit") + "; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString() : document.cookie = "limit=45; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString()),
    params.get("limit") && (document.cookie = "limit=" + params.get("limit") + "; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString()),
    document.getElementById("imp").onerror = function(a) {
        this.src = "https://assets.indreams.me/images/users/default.png"
    }
    ,
    document.cookie.split("; ").find(a=>a.startsWith("auth=")) && (document.cookie = "user=" + document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].split(document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1][document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].length - 10] + document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].substring(document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1].length - 9))[0] + "; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString(),
    document.cookie = "auth=; Max-Age=0;"),
    params.get("user") && (document.cookie = "user=" + params.get("user") + "; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString()),
    (async()=>{
        importlist = await (await fetch("/data/u/" + iddb[document.cookie.split("; ").find(a=>a.startsWith("user="))?.split("=")[1]] + '.json')).json(),
        imports = params.get("start") - 0,
        (async()=>{
            userdb = await (await fetch("/data/u/list.json")).json(),
            document.getElementById("imp").onerror = function(a) {
                this.src = "https://assets.indreams.me/images/users/default.png"
            }
            ,
            "" + importlist[0] == "undefined" && (importlist[0] = {}),
            importlist[1] && (importlist[document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0) + 1] ? "" + params.get("json") == "null" ? "" + params.get("commit") == "null" ? document.getElementById("importnavnext").href = "/?start=" + (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0)) : document.getElementById("importnavnext").href = "/?start=" + (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0)) + "&commit=" + commitKey : document.getElementById("importnavnext").href = "/?start=" + (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0)) + "&json=" + encodeURI(params.get("json")) : document.getElementById("importnavnext").remove(),
            importlist[params.get("start") - 0 - (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0)] ? "" + params.get("json") == "null" ? "" + params.get("commit") == "null" ? document.getElementById("importnavprev").href = "/?start=" + (params.get("start") - 0 - (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0)) : document.getElementById("importnavprev").href = "/?start=" + (params.get("start") - 0 - (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0)) + "&commit=" + commitKey : document.getElementById("importnavprev").href = "/?start=" + (params.get("start") - 0 - (document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0)) + "&json=" + encodeURI(params.get("json")) : document.getElementById("importnavprev").remove(),
            document.getElementsByClassName("navigation-container")[2] && document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 == 0 && document.getElementsByClassName("navigation-container")[2].remove(),
            document.getElementsByClassName("navigation-container")[2] && document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 < 0 && (document.cookie = "limit=45; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString()),
            document.getElementById("audioImports").innerHTML = "Audio Imports"),
            document.getElementById('audioClips').innerHTML = `<div style="margin:4px;padding:10px;display:inline-grid;text-align:center;background: #333;border-radius:10px;max-width:calc(100% - 28px);width:480px;height: 40px;"><a class="global-post-label" style="font-size: 16px;line-height:27px;color:#CCC;margin-top: 14px;font-family:Poppins;">Compiling Audio Imports</a><a class="global-post-icon" style="line-height: 20px;">loop</a><a class="global-post-details" style="position:absolute">Please Wait...</a></div>`,
            importlist[1] || document.getElementById("audioClipsContainer").remove(),
            void 0 == importlist[0].importLimit && (importlist[0].importLimit = 180),
            document.getElementById("imp").src = (importlist[0].impstored ? '/data/imp/' : ('https://cdn-prod.puprod.indreams.me/')) + importlist[0].imphash + "_9",
            document.getElementById("username").innerHTML = importlist[0].username,
            document.getElementById("username").href = "//indreams.me/" + importlist[0].username,
            document.getElementById("username").rel = "noreferrer noopener",
            document.getElementById("username").target = "_blank",
            document.getElementById("importCount").innerHTML = JSON.stringify(importlist).split('"import_date"').length - 1,
            document.getElementById("importLimit").innerHTML = Math.floor((importlist[0].importLimit - 0 + ((JSON.stringify(importlist).split('"import_date"').length - 1) * 10 - 0)) / 60) + "m " + (importlist[0].importLimit - 0 + ((JSON.stringify(importlist).split('"import_date"').length - 1) * 10 - 0)) % 60 + "s",
            document.getElementById("importTime").innerHTML = Math.floor((JSON.stringify(importlist).split('"import_date"').length - 1) * 10 / 60) + "m " + (JSON.stringify(importlist).split('"import_date"').length - 1) * 10 % 60 + "s",
            document.getElementById("userLevel").className = document.getElementById("userLevel").className + " persona " + importlist[0].level[0].persona,
            document.getElementById("userLevel").innerHTML = importlist[0].level[0].level,
            document.getElementById("maxRequestsD").innerHTML = Math.floor((JSON.stringify(importlist).split('"import_date"').length - 1) / 10 * 3) + 1,
            document.getElementById("maxRequestsW").innerHTML = Math.floor((JSON.stringify(importlist).split('"import_date"').length - 1) / 3 * 3) + 3,
            document.getElementById("maxRequestsM").innerHTML = Math.floor((JSON.stringify(importlist).split('"import_date"').length - 1) / 3 * 4) + 12,
            document.getElementById("maxRequestsY").innerHTML = Math.floor((JSON.stringify(importlist).split('"import_date"').length - 1) * 7) + 35,
            document.getElementById("pendingLimit").innerHTML = Math.floor((JSON.stringify(importlist).split('"import_date"').length - 1) / 2) + 1,
            document.getElementById("pendingRequests").innerHTML = importlist.length - JSON.stringify(importlist).split('"import_date"').length,
            importlist[0].verified && (Array.from(document.getElementsByClassName('home-content-container userlimits')).map(a=>a.remove()),
            v = document.createElement('a'),
            v.style = `font-family: 'Material Icons';font-size: 24px;line-height: 44px;`,
            v.textContent = 'verified_user',
            document.getElementsByClassName('version-container dreamsdb impusername-container')[0].appendChild(v),
            document.getElementById('username').style = 'margin-left:32px'),
            importlist[0].prompt && (authenticate = prompt("The authenticated user " + document.cookie.split("; ").find(a=>a.startsWith("user="))?.split("=")[1] + " was deleted, or doesn't exist. Enter a new username or userID to try again.", ''),
            authenticate.length != 0 && userdb[iddb[authenticate]] && (document.cookie = "user=" + userdb[iddb[authenticate]].username + "; expires=" + new Date(new Date().valueOf() + 31536e6).toGMTString(),
            window.location.reload()));
            setTimeout(()=>{
                do {
                    params.get("start") && document.getElementById("audioClipsContainer").scrollIntoView(),
                    imports++,
                    document.getElementById("audioClips").innerHTML += `<div style="margin:4px;padding:10px;display:inline-grid;text-align:center;background:${importlist[imports].img[0].color || '#333'};border-radius:10px;max-width:calc(100% - 28px);width:480px;height:120px;">
  ${Object.keys(importlist[imports].img[0]).length == 2 && '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVAgdY2BgAAAAAwABT0gKrwAAAABJRU5ErkJggg==" style="transform:scale(1.10345);height:50px;width:50px;position: absolute;background-image:url(&quot;/assets/images/cardOverlay.png&quot;), url(&quot;https://cdn-prod.puprod.indreams.me/' + importlist[imports].img[0].hash + '_2&quot;), url(&quot;https://cdn-prod.puprod.indreams.me/' + importlist[imports].img[0].hash + '_7&quot;);-webkit-mask-image:url(&quot;/assets/images/cardMaskImage.png&quot;);-webkit-mask-size:cover;border-radius:50%;background-color:' + importlist[imports].img[0].color + ';background-size:cover;background-position:centercenter;">' || ''}
  <a class="global-post-label"${importlist[imports].browse_id && importlist[imports].creation_id && ' href="/imports?id=' + importlist[imports].browse_id + '"'} style="font-size:16px;line-height:27px;color:#ccc ${importlist[imports].import_date && ';margin-left:54px' || ''};margin-top:18px;font-family:Poppins;">${importlist[imports].import_name}</a>
  <a class="global-post-icon" style="line-height: 20px;">${importlist[imports].import_date && 'check' || 'schedule'}</a>
  <a class="global-post-details" style="${importlist[imports].import_date && 'margin-left:54px;' || ''}position:absolute;margin-top:4px;">${importlist[imports].import_date || 'Pending Completion'}</a>
  ${importlist[imports].source && '<div style="align-self:flex-end"><audio src="https://audio.dreams.kee7702.tk/' + importlist[imports].source + '.mp3" controls="" preload="none" loop="" style="width:100%;margin:4px 0"></audio></div>' || importlist[imports].sound_id && '<div style="align-self:flex-end"><audio src="https://audio.dreams.kee7702.tk/' + importlist[imports].sound_id.replaceAll('-', '/') + '.ogg" controls="" preload="none" loop="" style="width:100%;margin:4px 0"></audio></div>' || '<a style="padding:12px;background:#fff2;font-size:16px;line-height:30px;color:#CCC;font-family:Poppins;border-radius:16px;height:30px;align-self:flex-end;margin:4px 0;">No Audio File</a>'}
</div>`
                    !(importlist[imports + 1] && document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0) - imports != 0) && (document.getElementById('audioClips').children[0].remove())
                } while (importlist[imports + 1] && document.cookie.split("; ").find(a=>a.startsWith("limit="))?.split("=")[1] - 0 + (params.get("start") - 0) - imports != 0)
            }
            , 5)
        }
        )()
    }
    )()
}
)()
