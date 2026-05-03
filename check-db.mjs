import Database from 'better-sqlite3';
const db = new Database('./data.db');
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
const names = tables.map(t => t.name).filter(n => !n.startsWith('sqlite_'));
console.log('All tables:', names);
for (const name of names) {
  try {
    const count = db.prepare(`SELECT count(*) as c FROM "${name}"`).get();
    if (count.c > 0) console.log(`  ${name}: ${count.c} rows`);
  } catch(e) {}
}
