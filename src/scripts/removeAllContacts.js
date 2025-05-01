import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], undefined, 2));
    console.log('All contacts have been removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();

// import fs from 'node:fs/promises';

// // Видаляємо файл за шляхом 'file.txt'
// (async () => {
//   try {
//     await fs.unlink('file.txt');
//     console.log('Файл успішно видалено.');
//   } catch (err) {
//     console.error('Помилка видалення файлу:', err);
//   }
// })();
