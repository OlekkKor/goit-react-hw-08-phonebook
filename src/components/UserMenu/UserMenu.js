import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth.js';
import { Box } from '@mui/material';

import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{
      gap: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
        
      <p sx={{
        
      color: '#18ffff',
      display: 'inline-Block',
      }} >Welcome, {user.name}</p>
      
      {/* <button type="button" onClick={() => dispatch(logOut())} 
      sx={{
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'transparent',

        '&:hover:not(.active)': {
          color: '#84ffff',
        },
      }} >
        Logout
      </button> */}





      {/* <Button sx={{

        color:'white',
        backgroundColor: 'transparent',
        border: 'none',
      
        '&:hover:not(.active)': {
          color: '#84ffff',
          backgroundColor: 'transparent',
          borderBottom: '2px solid #84ffff',
        },

      }} 
      type="button" variant="contained" onClick={() => dispatch(logOut())}> Logout</Button> */}


      <ListItem
      component={NavLink}  
        sx={{
        color: 'white',
        textAlign: 'center',
        width: 'auto',

        '&:hover:not(.active)': {
          color: '#84ffff',
        },

        }}  
       
        onClick={() => dispatch(logOut())}  to="/" >
        Log Out
      </ListItem>


    </Box>
  );
};