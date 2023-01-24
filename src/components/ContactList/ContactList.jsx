import { useDispatch, useSelector} from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import { selectVisibleContacts } from 'redux/contacts/selectors.js';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          <p>{name}:</p> <p>{number}</p>
          
          <button className={css.button} type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>

          {/* <Button sx={{
        height: 30,
        width: 90,
        color:'white',
        borderRadius: 15,
        backgroundColor: 'rgb(02, 00, 56)',
      
        '&:hover:not(.active)': {
          backgroundColor: 'rgb(02, 00, 56)',
          boxShadow: '0px 0px 20px white',
        },

      }} 
      type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button> */}



        </li>
      ))}
    </ul>
  );
};
