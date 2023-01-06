import { useSelector, useDispatch } from 'react-redux';
import { selectRenderContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import s from './ContactList.module.css';

export const ContactList = () => {
  const renderContacts = useSelector(selectRenderContacts);

  const dispatch = useDispatch();

  const onDeleteCont = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {renderContacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          {name}:<span>{number}</span>
          <button
            type="button"
            onClick={() => onDeleteCont(id)}
            className={s.btnForm}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
