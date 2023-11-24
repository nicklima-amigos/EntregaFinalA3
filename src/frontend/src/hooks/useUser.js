import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useUser() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
      return;
    }
    setUser(JSON.parse(user));
  }, [navigate]);
  return user;
}
