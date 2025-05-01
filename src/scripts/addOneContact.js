import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const addOneContact = async () => {
  try {
    const dada = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(dada);
    const newContact = createFakeContact();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), {
      encoding: 'utf-8',
    });
    console.log('Contact added successfully');
    console.log('New contact:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
