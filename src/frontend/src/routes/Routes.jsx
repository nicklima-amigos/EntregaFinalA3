import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../components/guards/AuthGuard";
import CategoryForm from "../pages/CategoryForm/CategoryForm";
import CreatePlatform from "../pages/CreatePlatform/CreatePlatform";
import GameForm from "../pages/GameForm/GameForm";
import LoginForm from "../pages/LoginForm/LoginForm";
import Platform from "../pages/Platform/Platform";
import Platforms from "../pages/Platforms/Platforms";
import SignUpForm from "../pages/SignUpForm/SignUpForm";
import UpdatePlatform from "../pages/UpdatePlatform/UpdatePlatform";

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
    path: "platforms",
    element: (
      <AuthGuard>
        <Platforms />
      </AuthGuard>
    ),
  },
  {
    path: "platforms/:platformId",
    element: (
      <AuthGuard>
        <Platform />
      </AuthGuard>
    ),
  },
  {
    path: "platforms/:platformId/edit",
    element: (
      <AuthGuard>
        <UpdatePlatform />
      </AuthGuard>
    ),
  },
  {
    path: "platforms/create",
    element: (
      <AuthGuard>
        <CreatePlatform />
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
    path: "games/create/platform/:platformId",
    element: (
      <AuthGuard>
        <GameForm />,
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
