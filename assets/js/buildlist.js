(async () => {(importlist = await (await fetch("/data/i/c/list.json")).json());imports = -1;do {imports++;importlist[imports].import_date=new Date(importlist[imports].import_date).toString().slice(4,7)+new Date(importlist[imports].import_date).toString().slice(7,10)+','+new Date(importlist[imports].import_date).toString().slice(10,15),!importlist[imports].browse_id && (importlist[imports].browse_id = ((parseInt(importlist[imports].import_name.replaceAll(' ', ''), 36)) + parseInt(importlist[imports].creation_id.split('/')[1], 36)).toString(16).slice(0, 15) + importlist[imports].img[0].hash.slice(0, 5) + (parseInt(importlist[imports].img[0].hash, 36) / (parseInt('' + importlist[imports].import_name.length, 36), 36)).toString(36).slice(0, 5)); !importlist[imports + 1] && (a = document.createElement("a"),a.href = window.URL.createObjectURL(new Blob([JSON.stringify(importlist)], {type: "application/json"})),a.download = "list.json",a.click())} while (importlist[imports + 1])})();
