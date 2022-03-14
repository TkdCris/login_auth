import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';

export const Login = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navegate = useNavigate();

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navegate('/');
      } else {
        alert('Login failed');
      }
    }
  }

  return (
    <div>
      <h2>Faça login para ter acesso a página Privada</h2>
      <input
        type="text"
        placeholder="Email:"
        onChange={handleEmailInput}
        value={email}
        name="Email"
      />
      <input
        type="password"
        placeholder="Senha:"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name="Password"
      />
      <button onClick={handleLogin}>Fazer Login</button>
    </div>
  );
}