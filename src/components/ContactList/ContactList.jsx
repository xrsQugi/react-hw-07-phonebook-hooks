import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { MdHighlightOff } from 'react-icons/md';

export default function ContactList({ contacts, onDelete, filter }) {
  return (
    <ul className={css.list_contacts}>
      {contacts
        // .filter(contact => {
        //   return (
        //     filter.toLowerCase() === ''
        //     ? contact
        //     : contact.name.toLowerCase().includes(filter)
        //   )
        // })
        .map(contact => (
          <li id={contact.id} key={nanoid()} className={css.item_contact}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <MdHighlightOff
              className={css.delete_icon}
              onClick={() => onDelete(contact.id)}
            />
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
