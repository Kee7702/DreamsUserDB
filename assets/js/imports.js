(async()=>{const res=await fetch(`/assets/json/imports/data.json`);const json=await res.json();importlist=(json);imports=-1

                 if(importlist) {
      document.getElementById('audioImports').innerHTML = "Audio Imports";}
do {imports++
   importicon = null
   var importaudio = null;
   var clipimg = null;
      var clipimg = document.createElement('img');
      clipimg.style = "height:36px;width:36px;position:absolute";
      clipimg.onerror = function onerror(event) {
    this.src = 'https://cdn.indreams.me/f4e28ecea5d09b18c822c2ff0db10924_10'
}
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
      if (importlist[imports].import_status == "1") {clipname.style = "font-size:16px;line-height:20px;color:#ccc;margin-left:40px";clipdesc.style = "margin-left:40px";clipdiv.appendChild(clipimg);clipname.href = ("https://indreams.me/element/" + importlist[imports].creation_id);clipimg.src = ("https://cdn.indreams.me/" + importlist[imports].imgHash + "_9");clipdesc.textContent = ("Completed on " + importlist[imports].import_date);clipstatus.textContent = "check"}else{}
      if (importlist[imports].import_status == "2") {clipdesc.textContent = "Import Removed";clipstatus.textContent = "close"}else{}
      if (importlist[imports].import_status == "3") {clipstatus.textContent = "campaign"}else{}
      if (importlist[imports].import_iconoverride) {clipstatus.textContent = importlist[imports].import_iconoverride}else{}
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipstatus);
      clipdiv.appendChild(clipdesc);
      if (importlist[imports].uploaded) {var importaudio = new Audio;
      importaudio.style = 'width: -webkit-fill-available;height: 20px;margin: 0;display: block;margin-top: 6px';
      importaudio.controls = true;
      importaudio.innerHTML = (`<source src="/assets/audio/mp3/` + importlist[imports].import_name + `.mp3" type="audio/mp3"><source src="/assets/audio/aac/` + importlist[imports].import_name + `.aac" type="audio/aac"><source src="/assets/audio/flac/` + importlist[imports].import_name + `.flac" type="audio/flac">`)
      clipdiv.appendChild(importaudio);}else{}
      document.getElementById("audioClips").appendChild(clipdiv);
    Array.from(document.getElementsByTagName('audio')).map((p) => new Plyr(p, {controls:['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'download'],settings:['captions', 'quality', 'speed', 'loop'],toggleInvert:false,volume:0.75,invertTime:false,storage:false,loop:{active:true}}));
console.log=(importlist[imports]);}
while(importlist[imports+1]);})()
