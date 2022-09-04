(async () => {
  (iddb = await (await fetch("/data/u/ids")).json());
  (async () => {
    (userlist = await (await fetch("/data/u/list")).json());
    (async () => {
      (importlist = await (await fetch("/data/i/list")).json());
        (async () => {
          (importlist10 = await (await fetch("/data/u/c/10")).json())[0].username = userlist[10].username, userlist[10].impstored && (importlist10[0].impstored=true), importlist10[0].imphash = userlist[10].imphash, imports = 0;
          do imports++, 10 == importlist[imports].userID && (importlist10[importlist10.length] = importlist[imports]), !importlist[imports+1] && (importlist10 = btoa(JSON.stringify(importlist10)),src=document.createElement('script'),src.type="module",src.textContent=`import { Octokit } from "https://cdn.skypack.dev/@octokit/core";const octokit = new Octokit({auth:document.cookie.split("; ").find(a=>a.startsWith("auth:"))?.split(":")[1],});const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {owner: "Kee7702",repo: "DreamsUserDB",file_path: "data/u/10"});const { data } = await octokit.request('PUT /repos/{owner}/{repo}/contents/{file_path}', {message: new Date().valueOf().toString(36)+' '+importlist10[0].username+' Build', owner: 'Kee7702', sha:{ sha }.sha, repo: 'DreamsUserDB', file_path:'data/u/10',  content: importlist10});`,document.getElementsByTagName('head')[0].appendChild(src)); while (importlist[imports + 1])
      })();
    })();
  })();
})();
