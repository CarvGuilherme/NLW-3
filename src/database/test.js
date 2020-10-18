const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    about: "Presta assistencia a criancas de 06 a 15 anos que se encontram em situcacao de risco e/ou vulnerabilbidade social",
    whatsapp: "988989898",
    images: [
        "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1581701391032-33cb5e7b44fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar",
    opening_hours: "Horario de visitas: Das 18h ate 8h",
    open_on_weekends: "0"

});
  // //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT *  FROM orphanages WHERE id="1"');
  console.log(orphanage);

  //deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id='4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id='5'"))
});
