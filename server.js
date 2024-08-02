// const { Pool } = require('pg');
const {Pool} = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TMSdb',
  password: 'Mes%3alnas',
  port: 5432,
});


async function queryDatabase() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT pg_catalog.pg_database WHERE oid = 16398)ORDER BY pid');
    console.log('Query result:', result.rows);
    client.release();
  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    await pool.end();
  }
}
queryDatabase();