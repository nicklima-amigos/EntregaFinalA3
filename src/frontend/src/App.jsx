import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <h1>Home Page</h1>
          <a href='/login'>Login</a>
        </>
      ),
    },
    {
      path: 'login',
      element: <LoginForm />,
    },
    {
      path: 'signup',
      element: <h1>Página de cadastro</h1>,
    },
    {
      path: 'games',
      element: <h1>Veja jogos aqui</h1>,
    },
    {
      path: 'games/:id',
      element: <h1>Veja detalhes de um jogo aqui</h1>,
    },
    {
      path: 'games/create',
      element: <h1>Crie um jogo aqui</h1>,
    },
    {
      path: 'platforms',
      element: <h1>Veja plataformas aqui</h1>,
    },
    {
      path: 'platforms/create',
      element: <h1>Crie uma plataforma aqui</h1>,
    },
    {
      path: 'categories',
      element: <h1>Veja categorias aqui</h1>,
    },
    {
      path: 'categories/create',
      element: <h1>Crie uma categoria aqui</h1>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
