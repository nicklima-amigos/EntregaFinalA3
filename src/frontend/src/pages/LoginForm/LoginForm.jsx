import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../../components/UI/FormField/FormField';
import Button from '../../components/UI/Button/Button';
import MainLogo from '../../components/icons/MainLogo';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`Login com email: ${email} e senha: ${password}`);
      navigate('/platforms');
    }, 2000);
  };
  const handleSignUp = () => {
    navigate('signup');
  };
  return (
    <div className='container mt-5 mx-auto d-flex flex-column align-items-center justify-content-center h-100 w-100 '>
      <MainLogo />
      <form className='col-4 mx-auto d-flex align-content-center flex-wrap flex-column'>
        <FormField
          type='email'
          label='Email'
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          type='password'
          label='Senha'
          placeholder='******'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={handleLogin} loading={loading}>
            Login
          </Button>
          <p onClick={handleSignUp} className={styles.p}>
            crie sua conta Nick Games
          </p>
        </div>
      </form>
    </div>
  );
}
