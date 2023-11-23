import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
      return;
    }
  }, [navigate, user, loading]);
  return <>{children}</>;
}
