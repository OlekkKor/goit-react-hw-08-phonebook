import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice.js';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <TextField
        sx={{ width: 400 }}
        id="filled-basic"
        label="Contacts"
        variant="filled"
        type="text"
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};
