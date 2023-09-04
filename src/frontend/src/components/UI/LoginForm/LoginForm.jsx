import React, { useState } from 'react';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`Login com email: ${email} e senha: ${password}`);
    }, 2000); // Simulando uma espera de 2 segundos.
  };

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <form>
        <div className='form-group mt-2 mb-2'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Digite seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-group mt-2 mb-2'>
          <label>Senha</label>
          <input
            type='password'
            className='form-control'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type='button'
          className='btn btn-primary mt-2 mb-2'
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className='spinner-border spinner-border-sm'
                role='status'
                aria-hidden='true'
              ></span>
              Entrando...
            </>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
}
