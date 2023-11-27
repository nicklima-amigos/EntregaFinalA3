import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/UI/FormField/FormField";
import Button from "../../components/UI/Button/Button";
import MainLogo from "../../components/icons/MainLogo";
import { apiClient } from "../../services/apiClient";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [formError, setFormError] = useState("");

  const clearErrors = () => {
    setUsernameError("");
    setEmailError("");
    setConfirmPasswordError("");
    setFormError("");
  };

  const validateForm = async () => {
    clearErrors();
    if (password !== confirmPassword) {
      setConfirmPasswordError("As senhas não coincidem");
      return false;
    }
    if (password.length < 6) {
      setConfirmPasswordError("A senha deve ter no mínimo 6 caracteres");
      return false;
    }
    if (username.length < 3) {
      setFormError("O username deve ter no mínimo 3 caracteres");
      return false;
    }
    if (!email.includes("@")) {
      setFormError("Favor inserir um Email válido");
      return false;
    }
    const existChecks = await Promise.allSettled([
      apiClient.get(`/users/username/${username}`).then((res) => {
        if (res.status === 200) {
          setUsernameError("Username já cadastrado");
          return false;
        }
      }),
      apiClient.get(`/users/email/${email}`).then((res) => {
        if (res.status === 200) {
          setEmailError("Email já cadastrado");
          return false;
        }
      }),
    ]);
    if (existChecks.includes(false)) {
      return false;
    }
    return true;
  };

  const handleCreate = async () => {
    setLoading(true);
    const formIsValid = await validateForm();
    if (!formIsValid) {
      setLoading(false);
      return;
    }
    const { status } = await apiClient.post("/users", {
      username,
      email,
      password,
      confirm_password: confirmPassword,
      birth_date: birthDate,
    });
    setLoading(false);
    if (status === 201) {
      navigate("/");
      return;
    }
    console.log("bad status:", { status });
    setFormError("Erro ao criar usuário. Tente novamente.");
    return;
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-start w-100">
      <Button onClick={goBack}>Voltar</Button>
      <div className="mt-5 mx-auto d-flex flex-column align-items-center justify-content-center w-100">
        <MainLogo />
        <form className="col-4 mx-auto d-flex align-content-center flex-wrap flex-column">
          {formError && <p className="text-danger">{formError}</p>}
          <FormField
            type="text"
            label="Username"
            name="username"
            placeholder="Digite seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fieldError={usernameError}
          />
          <FormField
            type="text"
            label="Email"
            name="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fieldError={emailError}
          />
          <FormField
            type="password"
            label="Senha"
            name="password"
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormField
            type="password"
            label="Confirmar Senha"
            name="confirmPassword"
            placeholder="*****"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fieldError={confirmPasswordError}
          />
          <FormField
            type="date"
            label="Data de aniversário"
            name="birthDate"
            placeholder="data de aniversário"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <Button onClick={handleCreate} loading={loading}>
            Criar
          </Button>
        </form>
      </div>
    </div>
  );
}
