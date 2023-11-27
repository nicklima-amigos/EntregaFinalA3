import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../components/guards/AuthGuard";
import CategoryForm from "../components/UI/CategoryForm/CategoryForm";
import CreatePlatform from "../pages/CreatePlatform/CreatePlatform";
import LoginForm from "../pages/LoginForm/LoginForm";
import Platform from "../pages/Platform/Platform";
import Platforms from "../pages/Platforms/Platforms";
import SignUpForm from "../pages/SignUpForm/SignUpForm";
import UpdatePlatform from "../pages/UpdatePlatform/UpdatePlatform";
import Games from "../pages/Games/Games";
import CreateGame from "../pages/CreateGame/CreateGame";
import UpdateGame from "../pages/UpdateGame/UpdateGame";
import AddGame from "../pages/AddGame/AddGame";

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
    path: "platforms/:platformId/add-games",
    element: (
      <AuthGuard>
        <AddGame />
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
        <Games />
      </AuthGuard>
    ),
  },
  {
    path: "games/create",
    element: (
      <AuthGuard>
        <CreateGame />
      </AuthGuard>
    ),
  },
  {
    path: "games/:gameId/edit",
    element: (
      <AuthGuard>
        <UpdateGame />,
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
