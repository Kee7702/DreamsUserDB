      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc";
      clipname.className = "global-post-label";
      clipname.textContent = "LocoRoco - Moinoi Moinoi"
      var clipstatus = document.createElement('a');
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "schedule"
      var clipdesc = document.createElement('a');
      clipdesc.className = "global-post-details";
      clipdesc.textContent = "Pending Completion"
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipstatus);
      clipdiv.appendChild(clipdesc);
      document.getElementById("audioClips").appendChild(clipdiv);
var script = document.createElement('script');
script.src = "/user/FreakZiIIA8EK6vP3zHfN/imports/13.js";
document.getElementsByTagName('head')[0].appendChild(script);
