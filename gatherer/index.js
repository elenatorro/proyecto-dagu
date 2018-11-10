const db = require('./src/db/sql')

async function init() {
  await db.connect()
  db.init();
}

init();


