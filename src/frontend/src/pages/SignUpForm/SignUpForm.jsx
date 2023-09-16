import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/UI/FormField/FormField";
import Button from "../../components/UI/Button/Button";
import MainLogo from "../../components/icons/MainLogo";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState();

  const handleCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(
        `usuario criado: Username: ${username} email: ${email} password: ${password} created_at: ${createdAt}`
      );
    }, 2000);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-start h-100 w-100 ">
      <Button onClick={goBack}>Voltar</Button>
      <div className="container mt-5 mx-auto d-flex flex-column align-items-center justify-content-center h-100 w-100 ">
        <MainLogo />
        <form className="col-4 mx-auto d-flex align-content-center flex-wrap flex-column">
          <FormField
            type="text"
            label="Username"
            name="username"
            placeholder="Digite seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormField
            type="text"
            label="Email"
            name="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
