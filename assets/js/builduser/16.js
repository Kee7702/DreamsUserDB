(async () => {
  (iddb = await (await fetch("/data/u/ids")).json());
  (async () => {
    (userlist = await (await fetch("/data/u/list")).json());
    (async () => {
      (importlist = await (await fetch("/data/i/list")).json());
        (async () => {
          (importlist16 = await (await fetch("/data/u/c/16")).json())[0].username = userlist[16].username, userlist[16].impstored && (importlist16[0].impstored=true), importlist16[0].imphash = userlist[16].imphash, imports = 0;
          do imports++, 16 == importlist[imports].userID && (importlist16[importlist16.length] = importlist[imports]), !importlist[imports+1] && (src=document.createElement('script'),src.type="module",src.textContent=`import { Octokit } from "https://cdn.skypack.dev/@octokit/core";const octokit = new Octokit({auth:document.cookie.split("; ").find(a=>a.startsWith("auth:"))?.split(":")[1],});const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {owner: "Kee7702",repo: "DreamsUserDB",file_path: "data/u/16"});const { data } = await octokit.request('PUT /repos/{owner}/{repo}/contents/{file_path}', {message: new Date().valueOf().toString(36)+' '+importlist16[0].username+' Build', owner: 'Kee7702', sha:{ sha }.sha, repo: 'DreamsUserDB', file_path:'data/u/16',  content: btoa(JSON.stringify(importlist16))});`,document.getElementsByTagName('head')[0].appendChild(src)); while (importlist[imports + 1])
      })();
    })();
  })();
})();
