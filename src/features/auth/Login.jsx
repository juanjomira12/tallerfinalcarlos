import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, saveSession } from './authService';

export function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    setForm((current) => ({
      ...current,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback({ type: '', message: '' });

    try {
      const data = await loginUser({
        email: form.email.trim(),
        password: form.password,
      });

      saveSession(data);
      navigate('/dashboard');
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="auth-card p-4 p-lg-5">
              <span className="section-chip mb-3">Bienvenido</span>
              <h1 className="h2 fw-semibold mb-2">Entra a tu panel de gastos</h1>
              <p className="muted-copy mb-4">
                Accede a tu cuenta para revisar tus movimientos y continuar tu seguimiento diario.
              </p>

              {feedback.message && (
                <div className={`alert alert-${feedback.type}`} role="alert">
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="d-grid gap-3">
                <div>
                  <label htmlFor="email" className="form-label fw-semibold">Correo</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control auth-input"
                    placeholder="tu@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="form-label fw-semibold">Contrasena</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control auth-input"
                    placeholder="Tu contrasena"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn primary-button w-100 mt-2" disabled={loading}>
                  {loading ? 'Entrando...' : 'Iniciar sesion'}
                </button>
              </form>

              <div className="d-flex justify-content-between flex-wrap gap-2 mt-4">
                <Link to="/forgot-password" className="text-decoration-none fw-semibold muted-copy">
                  Olvide mi contrasena
                </Link>
                <Link to="/register" className="text-decoration-none fw-semibold">
                  Crear cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
