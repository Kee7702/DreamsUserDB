(async () => {
  (importlist = await (await fetch("/data/i/list")).json());
  imports = -1;
  do {
    imports++;
    importlist[imports].browse_id = ((parseInt(importlist[imports].import_name.replaceAll(' ', ''), 36)) + parseInt(importlist[imports].creation_id, 36)).toString(16).slice(0, 15) + importlist[imports].img[0].hash.slice(0, 5) + (parseInt(importlist[imports].img[0].hash, 36) / (parseInt('' + importlist[imports].import_name.length + importlist[imports].source, 36) / parseInt(importlist[imports].source, 36))).toString(36).slice(0, 12); !importlist[imports + 1] && (src=document.createElement('script'),src.type="module",src.textContent=`import { Octokit } from "https://cdn.skypack.dev/@octokit/core";const octokit = new Octokit({auth:document.cookie.split("; ").find(a=>a.startsWith("auth="))?.split("=")[1],});const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {owner: "Kee7702",repo: "DreamsUserDB",file_path: "data/i/list"});const { data } = await octokit.request('PUT /repos/{owner}/{repo}/contents/{file_path}', {message: new Date().valueOf().toString(36)+' importlist Build', owner: 'Kee7702', sha:{ sha }.sha, repo: 'DreamsUserDB', file_path:'data/i/list',  content: btoa(JSON.stringify(importlist))});`,document.getElementsByTagName('head')[0].appendChild(src))
  } while (importlist[imports + 1])
})();