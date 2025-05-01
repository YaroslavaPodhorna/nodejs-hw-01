import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    let contacts = JSON.parse(data);

    //     if (contacts.length === 0) {
    //       await generateContacts(5);
    //       const newData = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    //       contacts = JSON.parse(newData);
    //     }

    //     contacts.pop();

    //     await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    // removeLastContact();
    if (contacts.length === 0) {
      return;
    }

    contacts.pop();

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, undefined, 2),
      'utf-8',
    );
    console.log('Last contact removed successfully.');
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
