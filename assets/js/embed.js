const params = new URLSearchParams(window.location.search);
(async()=>{
    importlist = await (await fetch("/data/i/list.json")).json(),
    imports = -1,
    (async()=>{
        if (userdb = await (await fetch("/data/u/list.json")).json(),
        document.getElementById("importnavnext").remove(),
        document.getElementById("importnavprev").remove(),
        document.getElementsByClassName("navigation-container")[0].remove(),
        params.get("id"))
            ;do {
            imports++,
            importlist[imports].import_name.length > 64 && (importlist[imports].import_name = "Unnamed " + (parseInt(importlist[imports].img[0].color.substring(1), 16) + parseInt(importlist[imports].creation_id, 36)).toString(36)),
            importicon = null;
            var d = null
              , a = null;
            if (importlist[imports].browse_id && importlist[imports].browse_id == params.get("id") || importlist[imports].import_name && importlist[imports].import_name == params.get("name")) {
                var a = document.createElement("img");
                a.style = "height:36px;width:36px;position:absolute",
                a.onerror = function(a) {
                    this.src = "https://cdn-prod.puprod.indreams.me/52b7d5cfd294eb16d10ae91e674640fd_10"
                }
                ;
                var b = document.createElement("a");
                b.style = "font-size:16px;line-height:20px;color:var(--embed-color,#ccc)!important;z-index:1",
                b.className = "global-post-label",
                b.textContent = importlist[imports].import_name;
                var e = document.createElement("img")
                  , c = document.createElement("div");
                if (c.className = "global-post-container",
                c.style = "background:var(--embed-bg,"+(importlist[imports].img[0].color || '#333')+")",
                importlist[imports].imgHash && (importlist[imports].img = [{
                    hash: importlist[imports].imgHash,
                    color: "var(--embed-bg,#333)"
                }],
                importlist[imports].imgHash = null),
                b.style = "white-space:nowrap;font-size:14px;line-height:20px;color:var(--embed-color,#ccc)!important;padding:0 10px 10px 24px;background:var(--embed-bg,"+(importlist[imports].img[0].color || '#333')+");border-radius:0 0 10px 0;z-index:1",
                (importlist[imports].creation_id&&(b.href = "https://indreams.me/" + importlist[imports].creation_id)),
                b.rel = "noreferrer noopener",
                b.target = "_blank",
                a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYGAAAAAFAAGKM+MAAAAAAElFTkSuQmCC",
                a.style = "height:100%;max-height:inherit;width:100%;background-image:url('https://cdn-prod.puprod.indreams.me/" + (importlist[imports].img[0].hash || '52b7d5cfd294eb16d10ae91e674640fd') + "_11'),url('https://cdn-prod.puprod.indreams.me/" + (importlist[imports].img[0].hash || '52b7d5cfd294eb16d10ae91e674640fd') + "_7');background-color:" + (importlist[imports].img[0].color || '#333') + ";background-size: cover;background-position:center;border-radius:10px",
                e.src = 'https://cdn-prod.puprod.indreams.me/' + userdb[importlist[imports].userID].imphash + "_10",
                e.onerror = function(a) {
                    this.src = "https://assets.indreams.me/images/users/default.png"
                }
                ,
                e.style = "height:20px;width:20px;line-height:20px;transform:scale(2)rotate(-5deg);position:absolute;z-index:2",
                c.appendChild(e),
                c.appendChild(b),
                c.appendChild(a),
                importlist[imports].import_iconoverride && (e.textContent = importlist[imports].import_iconoverride),
                document.body.style.background=document.body.style.background.replace('#000',(importlist[imports].img[0].color || '#333')),
                importlist[imports].source) {
                    var e = document.createElement('div');
                    e.style = "padding:10px;background:var(--embed-bg,"+(importlist[imports].img[0].color || '#333')+");position:absolute;width:100%";
                    var d = new Audio;
                    d.style = "width:calc(100% - 20px);border-radius:10px",
                    d.controls = !0,
                    d.loop = !0,
                    d.src = 'https://audio.dreams.kee7702.tk/' + importlist[imports].source + '.mp3',
                    e.appendChild(d),
                    c.appendChild(e)
                } else if (importlist[imports].sound_id) {
                    var e = document.createElement('div');
                    e.style = "padding:10px;background:var(--embed-bg,"+(importlist[imports].img[0].color || '#333')+");position:absolute;width:100%";
                    var d = new Audio;
                    d.style = "width:calc(100% - 20px);border-radius:10px",
                    d.controls = !0,
                    d.loop = !0,
                    d.src = 'https://audio.dreams.kee7702.tk/' + importlist[imports].sound_id.replaceAll('-', '/') + '.ogg',
                    e.appendChild(d),
                    c.appendChild(e)
                }
                document.getElementById("audioClips").appendChild(c),
                document.querySelector('audio').parentElement.style = "margin:-10px;width:100%;margin-top:" + (-10 - document.querySelector('audio').offsetHeight) + "px;padding:10px;background:var(--embed-bg,"+(importlist[imports].img[0].color || '#333')+");position:absolute",
                Array.from(document.getElementsByTagName("audio")).map(a=>a.addEventListener('error', function() {
                    this.cachedTime = this.currentTime;
                    this.src = this.src;
                    this.play();
                    this.currentTime = this.cachedTime;
                    this.cachedTime = null
                }))
            }
            importlist[imports + 1] || "" != document.getElementById("audioClips").innerHTML || (document.getElementById("audioClips").innerHTML = '<div class="global-post-container" style="background: rgb(34, 34, 34);"><a>404 Not Found<br>An import with the specified ID' + decodeURI(" %27" + params.get("id") + "%27 ") + "was not found in the database.</a></div>")
        } while (importlist[imports + 1] && importlist[imports].browse_id !== params.get("id") && importlist[imports].import_name !== params.get("name"))
    }
    )()
}
)()
