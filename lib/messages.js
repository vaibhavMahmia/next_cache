import sql from 'better-sqlite3';

const db = new sql('messages.sqlite3');

const initDb = () => db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);


initDb();

export const addMessage = (message) => db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);

export const getMessages = () => {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all();
}
