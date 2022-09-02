(async () => {
  (importlist = await (await fetch("/data/i/list")).json());
  imports = -1;
  do {
    imports++;
    importlist[imports].browse_id = ((parseInt(importlist[imports].import_name.replaceAll(' ', ''), 36)) + parseInt(importlist[imports].creation_id, 36)).toString(16).slice(0, 15) + importlist[imports].img[0].hash.slice(0, 5) + (parseInt(importlist[imports].img[0].hash, 36) / (parseInt('' + importlist[imports].import_name.length + importlist[imports].source, 36) / parseInt(importlist[imports].source, 36))).toString(36).slice(0, 12)
  } while (importlist[imports + 1])
})();
