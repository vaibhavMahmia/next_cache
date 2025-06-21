import sql from 'better-sqlite3';
import { cache } from 'react'; // to dont send duplicate request for get messages we are using in page and layout.
import { unstable_cache } from 'next/cache';

const db = new sql('messages.sqlite3');

const initDb = () => db.exec(`CREATE TABLE IF NOT EXISTS messages ( id INTEGER PRIMARY KEY, text TEXT )`);

initDb();

export const addMessage = (message) => db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);

export const getMessages = unstable_cache(cache(() => {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all();
}), ['messages'], { tags: ['msg'] });
