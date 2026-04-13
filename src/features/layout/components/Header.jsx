import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('daily-expenses-token');

  const handleLogout = () => {
    localStorage.removeItem('daily-expenses-token');
    localStorage.removeItem('daily-expenses-user');
    navigate('/login');
  };

  return (
    <header className="top-nav fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2">
          <Link className="navbar-brand fw-semibold d-flex align-items-center gap-3" to="/">
            <span className="brand-mark">DG</span>
            <span>Mira Gastos</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Abrir navegacion"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/api">API</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Panel</Link>
              </li>
              {!token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn secondary-button ms-lg-2" to="/register">Register</Link>
                  </li>
                </>
              )}
              {token && (
                <li className="nav-item">
                  <button type="button" className="btn secondary-button ms-lg-2" onClick={handleLogout}>
                    Salir
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
