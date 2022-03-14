import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home, Private } from './pages';
import { RequireAuth, AuthContext } from './contexts/Auth';

function App() {
  const auth = useContext(AuthContext);
  
  const handleLogout = async () => {
    await auth.logout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página privada</Link>
          {auth.user && <Link onClick={handleLogout} to="/">Sair</Link>}
        </nav>
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
