(async () => {
  (iddb = await (await fetch("/data/u/ids")).json());
  (async () => {
    (userlist = await (await fetch("/data/u/list")).json());
    (async () => {
      (importlist = await (await fetch("/data/i/list")).json());
        (async () => {
          (importlist = await (await fetch("/data/u/c/11")).json())[0].username = userlist[11].username, userlist[11].impstored && (importlist[0].impstored=true), importlist[0].imphash = userlist[11].imphash, imports = 0;
          do imports++, 11 == importlist[imports].userID && (importlist[importlist.length] = importlist[imports]), !importlist[imports+1] && (src=document.createElement('script'),src.type="module",src.textContent=`import { Octokit } from "https://cdn.skypack.dev/@octokit/core";const octokit = new Octokit({auth:document.cookie.split("; ").find(a=>a.startsWith("auth:"))?.split(":")[1],});const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {owner: "Kee7702",repo: "DreamsUserDB",file_path: "data/u/11"});const { data } = await octokit.request('PUT /repos/{owner}/{repo}/contents/{file_path}', {message: new Date().valueOf().toString(36)+' '+importlist[0].username+' Build', owner: 'Kee7702', sha:{ sha }.sha, repo: 'DreamsUserDB', file_path:'data/u/11',  content: btoa(unescape(encodeURIComponent(JSON.stringify(importlist))))});`,document.getElementsByTagName('head')[0].appendChild(src)); while (importlist[imports + 1])
      })();
    })();
  })();
})();
