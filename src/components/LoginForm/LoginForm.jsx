import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={handleSubmit}
    sx={{
    pt: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    gap: '20px',
    m: 5
    }}
  >
   
   <TextField 
   sx={{width: 400}} 
   id="filled-basic" label="Email" variant="filled" type="email" name="email"
   />

  <TextField 
   sx={{width: 400}}
   id="filled-basic" label="Password" variant="filled" type="password" name="password" 
   />

    <Button sx={{
      height: 45,
      width: 140,
      mt: '20px',
      color:'white',
      // color: '#18ffff',
      backgroundColor: '#006064',
    
      '&:hover:not(.active)': {
        color: '#84ffff',
        backgroundColor: '#006064',
      },

    }} 
    type="submit" variant="contained">Log In</Button>
  </Box>
  );
};
