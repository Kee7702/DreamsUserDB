(async () => {
  (iddb = await (await fetch("/data/u/ids")).json());
  (async () => {
    (userlist = await (await fetch("/data/u/list")).json());
    (async () => {
      (importlist = await (await fetch("/data/i/list")).json());
        (async () => {
          (importlist10 = await (await fetch("/data/u/10")).json())[0].username = userlist[10].username, importlist10[0].imphash = userlist[10].imphash, imports = 0;
          do imports++, 10 == importlist[imports].userID && (importlist10[importlist10.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist11 = await (await fetch("/data/u/11")).json())[0].username = userlist[11].username, importlist11[0].imphash = userlist[11].imphash, imports = 0;
          do imports++, 11 == importlist[imports].userID && (importlist11[importlist11.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist12 = await (await fetch("/data/u/12")).json())[0].username = userlist[12].username, importlist12[0].imphash = userlist[12].imphash, imports = 0;
          do imports++, 12 == importlist[imports].userID && (importlist12[importlist12.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist13 = await (await fetch("/data/u/13")).json())[0].username = userlist[13].username, importlist13[0].imphash = userlist[13].imphash, imports = 0;
          do imports++, 13 == importlist[imports].userID && (importlist13[importlist13.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist14 = await (await fetch("/data/u/14")).json())[0].username = userlist[14].username, importlist14[0].imphash = userlist[14].imphash, imports = 0;
          do imports++, 14 == importlist[imports].userID && (importlist14[importlist14.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist15 = await (await fetch("/data/u/15")).json())[0].username = userlist[15].username, importlist15[0].imphash = userlist[15].imphash, imports = 0;
          do imports++, 15 == importlist[imports].userID && (importlist15[importlist15.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist16 = await (await fetch("/data/u/16")).json())[0].username = userlist[16].username, importlist16[0].imphash = userlist[16].imphash, imports = 0;
          do imports++, 16 == importlist[imports].userID && (importlist16[importlist16.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist17 = await (await fetch("/data/u/17")).json())[0].username = userlist[17].username, importlist17[0].imphash = userlist[17].imphash, imports = 0;
          do imports++, 17 == importlist[imports].userID && (importlist17[importlist17.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist18 = await (await fetch("/data/u/18")).json())[0].username = userlist[18].username, importlist18[0].imphash = userlist[18].imphash, imports = 0;
          do imports++, 18 == importlist[imports].userID && (importlist18[importlist18.length] = importlist[imports]); while (importlist[imports + 1])
        })();
        (async () => {
          (importlist19 = await (await fetch("/data/u/19")).json())[0].username = userlist[19].username, importlist19[0].imphash = userlist[19].imphash, imports = 0;
          do imports++, 19 == importlist[imports].userID && (importlist19[importlist19.length] = importlist[imports]); while (importlist[imports + 1])
      })();
    })();
  })();
})();
