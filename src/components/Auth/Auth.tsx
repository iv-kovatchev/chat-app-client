import { Button, Stack, TextField } from '@mui/material';
import './Auth.scss';

const Auth = () => {
  return  (
    <Stack spacing={3} className='auth'>
      <TextField
        type='email'
        label='Email'
      />
      <TextField
        type='password'
        label='Password'
      />
      <Button>Login</Button>
    </Stack>
  )
}

export default Auth;
