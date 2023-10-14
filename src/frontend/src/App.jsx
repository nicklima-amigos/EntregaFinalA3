import { RouterProvider } from "react-router-dom";

import AuthProvider from "./contexts/authContext";
import { router } from "./routes/Routes.jsx";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
