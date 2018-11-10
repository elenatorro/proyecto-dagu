module.exports = {
  ALLOW_HTTP: process.env.ALLOW_HTTP === 'true',
  DEBUG_MODE: process.env.DEBUG_MODE === 'true',
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT) || 9000,
  PGUSER: process.env.PGUSER || null,
  PGHOST: process.env.PGHOST || 'localhost',
  PGPASSWORD: process.env.PGPASSWORD || null,
  PGDATABASE: process.env.PGDATABASE || 'unknownversity_db',
  PGPORT: process.env.PGPORT || 5432
}