import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, saveSession } from './authService';

export function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
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
      const data = await registerUser({
        name: form.name.trim(),
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
              <span className="section-chip mb-3">Nuevo acceso</span>
              <h1 className="h2 fw-semibold mb-2">Crea tu espacio para gastos diarios</h1>
              <p className="muted-copy mb-4">
                Registra tu cuenta y empieza a organizar tus movimientos desde una sola vista.
              </p>

              {feedback.message && (
                <div className={`alert alert-${feedback.type}`} role="alert">
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="d-grid gap-3">
                <div>
                  <label htmlFor="name" className="form-label fw-semibold">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control auth-input"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

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
                    placeholder="Minimo 6 caracteres"
                    value={form.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                </div>

                <button type="submit" className="btn primary-button w-100 mt-2" disabled={loading}>
                  {loading ? 'Creando cuenta...' : 'Registrarme'}
                </button>
              </form>

              <p className="mt-4 mb-0 text-center muted-copy">
                Ya tienes cuenta? <Link to="/login" className="text-decoration-none fw-semibold">Inicia sesion</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
