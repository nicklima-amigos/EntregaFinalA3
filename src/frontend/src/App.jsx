import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import Platforms from "./pages/Platforms/Platforms";
import PlatformForm from "./pages/PlatformForm/PlatformForm";
import GameForm from "./pages/GameForm/GameForm";
import CategoryForm from "./pages/CategoryForm/CategoryForm";
import styles from "./App.module.css";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import { AuthContext } from "./contexts/authContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

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
      element: <Platforms />,
    },
    {
      path: "platforms/create",
      element: <PlatformForm />,
    },
    {
      path: "games",
      element: <h1>Veja jogos aqui</h1>,
    },
    {
      path: "games/:id",
      element: <h1>Veja detalhes de um jogo aqui</h1>,
    },
    {
      path: "games/create",
      element: <GameForm />,
    },

    {
      path: "categories",
      element: <h1>Veja categorias aqui</h1>,
    },
    {
      path: "categories/create",
      element: <CategoryForm />,
    },
  ]);

  return (
    <div className={styles.mainContainer}>
      <AuthContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
