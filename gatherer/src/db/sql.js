const { Client } = require('pg')
const env = require('../config/env')

const client = new Client({
  user: env.PGUSER,
  host: env.PGHOST,
  database: env.PGDATABASE,
  password: env.PGPASSWORD,
  port: env.PGPORT
})

module.exports = {
  async connect() {
    await client.connect((err) => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    })
  },

  init() {
    client.query('SELECT * from university', (err, res) => {
      console.log(res.rows[0]);
      client.end()
    })
  }
}
