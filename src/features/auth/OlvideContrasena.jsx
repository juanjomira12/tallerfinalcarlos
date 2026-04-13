import { useState } from 'react';
import { Link } from 'react-router-dom';

export function OlvideContrasena() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="auth-card p-4 p-lg-5">
              <span className="section-chip mb-3">Recuperacion</span>
              <h1 className="h2 fw-semibold mb-2">Restablece tu acceso</h1>
              <p className="muted-copy mb-4">
                Esta vista queda preparada para que luego conectemos el flujo completo de recuperacion por correo.
              </p>

              {sent && (
                <div className="alert alert-info" role="alert">
                  Si existe una cuenta para {email}, recibirias un enlace de recuperacion.
                </div>
              )}

              <form onSubmit={handleSubmit} className="d-grid gap-3">
                <div>
                  <label htmlFor="reset-email" className="form-label fw-semibold">Correo</label>
                  <input
                    id="reset-email"
                    type="email"
                    className="form-control auth-input"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn primary-button w-100">
                  Enviar enlace
                </button>
              </form>

              <p className="mt-4 mb-0 text-center">
                <Link to="/login" className="text-decoration-none fw-semibold">
                  Volver al login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
