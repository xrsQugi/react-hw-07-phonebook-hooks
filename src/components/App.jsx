//! components
// import React, { Component} from 'react';
import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

//! other libraries
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//! styles
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const allFormSubmit = data => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    const existingNumber = contacts.find(
      contact => contact.number === data.number
    );

    if (existingContact) {
      return Notify.failure(`${data.name} is already in contacts.`);
    } else if (existingNumber) {
      return Notify.failure(`Number ${data.number} is already in exist`);
    } else {
      setContacts(contacts => [
        { id: nanoid(), name: data.name, number: data.number },
        ...contacts,
      ]);
    }
  };

  const filterContacts = () => {
    // string преобразуеться в true, кроме пустой строки "" -- false
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else{
      return contacts;
    }
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
    // setContacts(contacts =>
    //   contacts.filter(contact => contact.id !== contactId)
    // );
  };

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={allFormSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={e => setFilter(e.target.value)} />
      <ContactList
        contacts={filterContacts()}
        // contacts={contacts}
        // filter={filter}
        onDelete={deleteContact}
      />
    </div>
  );
}
