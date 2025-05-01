import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
