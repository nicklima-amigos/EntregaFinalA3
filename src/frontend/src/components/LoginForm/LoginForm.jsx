import React, { useState } from 'react';
import FormField from '../UI/FormField/FormField';
import Button from '../UI/Button/Button';
import MainLogo from '../icons/MainLogo';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`Login com email: ${email} e senha: ${password}`);
    }, 2000);
  };

  return (
    <div className='container mt-5 mx-auto d-flex flex-column align-items-center justify-content-center h-100 w-100 '>
      <MainLogo />
      <form className='col-4 mx-auto d-flex align-content-center flex-wrap flex-column'>
        <FormField
          type='email'
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          type='password'
          placeholder='Digite sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin} loading={loading}>
          Login
        </Button>
      </form>
    </div>
  );
}
