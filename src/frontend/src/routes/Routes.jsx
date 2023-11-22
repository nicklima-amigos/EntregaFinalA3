import LoginForm from "../pages/LoginForm/LoginForm";
import Platforms from "../pages/Platforms/Platforms";
import PlatformForm from "../pages/PlatformForm/PlatformForm";
import GameForm from "../pages/GameForm/GameForm";
import CategoryForm from "../pages/CategoryForm/CategoryForm";
import SignUpForm from "../pages/SignUpForm/SignUpForm";
import AuthGuard from "../components/guards/AuthGuard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "signup",
    element: <SignUpForm />,
  },
  {
    path: "platforms/:platformId",
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
    element: (
      <AuthGuard>
        <CategoryForm />,
      </AuthGuard>
    ),
  },
]);
