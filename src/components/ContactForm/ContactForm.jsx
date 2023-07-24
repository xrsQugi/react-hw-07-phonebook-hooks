// import React, { Component } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const formSubmit = e => {
    e.preventDefault();
    onSubmit({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={formSubmit} className={css.form_phonebook}>
      <label htmlFor={nameInputId} className={css.label_text}>
        Name
      </label>
      <input
        id={nameInputId}
        className={css.input_place}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter your name"
        value={name}
        onChange={e => {
            setName(e.currentTarget.value);
        }}
      />
      <label htmlFor={telInputId} className={css.label_text}>
        Number
      </label>
      <input
        id={telInputId}
        className={css.input_place}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter your number"
        value={number}
        onChange={e => {
            setNumber(e.currentTarget.value);
          }}
      />
      <button type="submit" className={css.btn_add}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};