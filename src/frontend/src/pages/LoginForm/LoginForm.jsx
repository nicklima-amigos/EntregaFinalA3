import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/UI/FormField/FormField";
import Button from "../../components/UI/Button/Button";
import MainLogo from "../../components/icons/MainLogo";
import styles from "./LoginForm.module.css";
import { apiClient } from "../../services/apiClient";
import { AuthContext } from "../../contexts/authContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    setLoading(true);
    const response = await apiClient.post("/auth/signin", { email, password });
    setLoading(false);
    if (response.status !== 200) {
      setFormErrors("Credenciais inválidas. Tente novamente.");
      return;
    }
    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    navigate("/platforms");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      return;
    }
    const { token } = JSON.parse(user);
    apiClient
      .get("/auth/authorize", {
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        setUser(JSON.parse(user));
        navigate("/games");
      });
  }, [setUser, navigate]);

  const handleSignUp = () => {
    navigate("signup");
  };

  return (
    <div className="container mt-5 mx-auto d-flex flex-column align-items-center justify-content-center h-100 w-100 ">
      <MainLogo />
      {formErrors && <p className="text-danger">{formErrors}</p>}
      <form className="col-4 mx-auto d-flex align-content-center flex-wrap flex-column">
        <FormField
          type="email"
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          type="password"
          label="Senha"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex align-items-center justify-content-between">
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
