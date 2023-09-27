import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import Platforms from "./pages/Platforms/Platforms";
import PlatformForm from "./pages/PlatformForm/PlatformForm";
import GameForm from "./pages/GameForm/GameForm";
import CategoryForm from "./pages/CategoryForm/CategoryForm";
import styles from "./App.module.css";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import AuthProvider from "./contexts/authContext";
import AuthGuard from "./components/guards/AuthGuard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "signup",
      element: <SignUpForm />,
    },
    {
      path: "platforms",
      element: (
        <AuthGuard>
          <Platforms />
        </AuthGuard>
      ),
    },
    {
      path: "platforms/create",
      element: (
        <AuthGuard>
          <PlatformForm />
        </AuthGuard>
      ),
    },
    {
      path: "games",
      element: (
        <AuthGuard>
          <h1>Veja jogos aqui</h1>
        </AuthGuard>
      ),
    },
    {
      path: "games/:id",
      element: (
        <AuthGuard>
          <h1>Veja detalhes de um jogo aqui</h1>,
        </AuthGuard>
      ),
    },
    {
      path: "games/create",
      element: (
        <AuthGuard>
          <GameForm />,
        </AuthGuard>
      ),
    },

    {
      path: "categories",
      element: (
        <AuthGuard>
          <h1>Veja categorias aqui</h1>
        </AuthGuard>
      ),
    },
    {
      path: "categories/create",
      element:(
        <AuthGuard>
          <CategoryForm />,
        </AuthGuard>
      ),
    },
  ]);

  return (
    <div className={styles.mainContainer}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
