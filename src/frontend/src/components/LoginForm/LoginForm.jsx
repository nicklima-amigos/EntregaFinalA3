import React, { useState } from 'react';
import FormField from '../UI/FormField/FormField';
import Button from '../UI/Button/Button';

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
    <div className='container mt-5'>
      <h1>Login</h1>
      <form>
        <FormField
          label='Email'
          type='email'
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          label='Senha'
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
