      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc;opacity:0;pointer-events:none";
      clipname.className = "global-post-label";
      clipname.textContent = "loading"
      clipname.href = "https://indreams.me/element/oMCgjuuYsjs"
      var clipstatus = document.createElement('a');
      clipstatus.style = "opacity:0;pointer-events:none"
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "loading"
      var clipdesc = document.createElement('a');
      clipdesc.style = "opacity:0;pointer-events:none"
      clipdesc.className = "global-post-details";
      clipdesc.textContent = "loading"
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipstatus);
      clipdiv.appendChild(clipdesc);
      document.getElementById("audioClipsContainer").appendChild(clipdiv);
