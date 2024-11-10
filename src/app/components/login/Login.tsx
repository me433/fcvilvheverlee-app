import * as Dialog from '@radix-ui/react-dialog';
import './Login.scss';
import { useState } from 'react';
import axios from '../../../api/axios';
import useAuth from '../../hooks/useAuth';

interface User {
  username: string,
  password: string
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [dialog, setDialog] = useState(false);
  
  const { auth, setAuth } = useAuth();

  const handleLogin = (e: any, user: User) => {
    e.preventDefault()
    axios.post('/login',
      {
        user: user.username,
        pwd: user.password
      },
      {
        withCredentials: true
      }
    )
    .then((res) => {
      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;

      setAuth({ user, roles, accessToken })
      setDialog(false)
    })
    .catch((err) => {
      console.error("Error during login: ", err)
    })
  }

  const handleLogout = () => {
    axios.delete('/logout', {
      withCredentials: true
    })
    .then((res) => {
      if (res.status == 204) {
        //clear auth, server deletes cookie
        setAuth(null)
      };
    })
    .catch((err) => {
      console.error("Error during login: ", err)
    })
  }

  return (
  <Dialog.Root open={dialog}>
    {auth?.roles ? 
    <button id="loginHeader" onClick={() => handleLogout()}>Uitloggen</button> 
    : 
    <Dialog.Trigger asChild>
      <button id="loginHeader" onClick={() => setDialog(true)}>Inloggen</button>
    </Dialog.Trigger>
    }
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent" >
        <Dialog.Title className="DialogTitle" style={{fontWeight: 'bold', color: '#32329f'}}>Inloggen</Dialog.Title>
        <form onSubmit={(e) => handleLogin(e, {username, password})}>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Gebruikersnaam: 
          </label>
          <input className="Input" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">
            Wachtwoord: 
          </label>
          <input className="Input" id="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="remember">
            Onthouden: 
          </label>
          <input className="Checkbox" id="remember" name='remember' type='checkbox' checked={remember} onChange={(e) => setRemember(e.target.checked)} />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'space-between', alignItems: 'center' }}>
            <a href=''>Wachtwoord vergeten?</a>
            <button className="Button login" type='submit'>Log in</button>
        </div>
        </form>
        <Dialog.Close asChild>
          <button className="IconButton" onClick={() => setDialog(false)} aria-label="Close">
            <p>x</p>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
};

export default Login;
