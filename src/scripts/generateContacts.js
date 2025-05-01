import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(
      `Successfully added ${number} new contacts. Total: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
