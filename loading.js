      var clipname = document.createElement('a');
      clipname.style = "font-size:16px;line-height:20px;color:#ccc;pointer-events:none";
      clipname.className = "global-post-label";
      clipname.textContent = "Loading Imports"
      var clipstatus = document.createElement('a');
      clipstatus.style = "pointer-events:none"
      clipstatus.className = "global-post-icon";
      clipstatus.textContent = "loop"
      var clipdiv = document.createElement('div');
      clipdiv.className = "global-annoucement";
      clipdiv.id = "loading";
      clipdiv.appendChild(clipname);
      clipdiv.appendChild(clipstatus);
      var clipchild = document.getElementById("audioClips").firstChild;
      document.getElementById("audioClips").insertBefore(clipdiv, clipchild)
