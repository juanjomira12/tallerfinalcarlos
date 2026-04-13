import { Link } from 'react-router-dom';

const expenseHighlights = [
  { label: 'Gasto hoy', amount: '$48.900', detail: 'Cafetería, transporte y mercado' },
  { label: 'Meta semanal', amount: '72%', detail: 'Vas dentro del presupuesto' },
  { label: 'Ahorro sugerido', amount: '$120.000', detail: 'Reduciendo compras impulsivas' },
];

const quickInsights = [
  {
    title: 'Registro en segundos',
    text: 'Anota cada gasto diario con categorías claras y una vista tranquila que no abruma.',
  },
  {
    title: 'Resumen visual limpio',
    text: 'Detecta fugas de dinero con bloques transparentes, cifras legibles y prioridades del día.',
  },
  {
    title: 'Hábitos sostenibles',
    text: 'Convierte movimientos pequeños en decisiones mejores con seguimiento constante.',
  },
];

const recentExpenses = [
  { name: 'Café de la mañana', category: 'Comida', amount: '-$8.500' },
  { name: 'Suscripción de música', category: 'Digital', amount: '-$14.900' },
  { name: 'Transporte', category: 'Movilidad', amount: '-$12.000' },
  { name: 'Ahorro automático', category: 'Meta', amount: '+$25.000' },
];

export function Content() {
  return (
    <div className="container py-5" style={{ paddingTop: '7rem' }}>
      <section className="row align-items-center gy-4 mb-5">
        <div className="col-lg-6">
          <span className="section-chip mb-3">Control diario</span>
          <h1 className="display-4 fw-semibold mb-3">
            Gestiona tus gastos diarios con una vista serena y precisa.
          </h1>
          <p className="lead muted-copy mb-4">
            Una página minimalista para registrar compras, revisar tus categorías y entrar a tu panel personal 
            sin perder el hilo de tus finanzas.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <Link to="/register" className="btn primary-button">
              Crear cuenta
            </Link>
            <Link to="/login" className="btn secondary-button">
              Iniciar sesión
            </Link>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="glass-panel rounded-5 p-4 p-lg-5">
            <div className="row g-3 mb-3">
              {expenseHighlights.map((item) => (
                <div className="col-md-4" key={item.label}>
                  <div className="hero-stat h-100 p-3">
                    <small className="text-uppercase muted-copy">{item.label}</small>
                    <strong className="d-block mt-2">{item.amount}</strong>
                    <p className="mb-0 mt-2 muted-copy small">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="expense-card p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <p className="mb-1 fw-semibold">Resumen rápido</p>
                  <small className="muted-copy">Movimientos de hoy</small>
                </div>
                <span className="expense-pill">Actualizado</span>
              </div>

              <div className="d-flex flex-column gap-3">
                {recentExpenses.map((expense) => (
                  <div className="d-flex justify-content-between align-items-center" key={expense.name}>
                    <div>
                      <p className="mb-0 fw-semibold">{expense.name}</p>
                      <small className="muted-copy">{expense.category}</small>
                    </div>
                    <span className={expense.amount.startsWith('+') ? 'text-primary fw-semibold' : 'fw-semibold'}>
                      {expense.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4 mb-5">
        {quickInsights.map((item) => (
          <div className="col-md-4" key={item.title}>
            <div className="insight-card h-100 p-4">
              <span className="section-chip mb-3">Simple</span>
              <h3 className="h4 mb-3">{item.title}</h3>
              <p className="mb-0 muted-copy">{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* NUEVA SECCIÓN: GITHUB REPOSITORY */}
      <section className="mb-5">
        <div className="glass-panel rounded-5 p-4 text-center border-0" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
          <p className="muted-copy mb-3 small text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>Proyecto de código abierto</p>
          <a 
            href="https://github.com/juanjomira12/tallerfinalcarlos.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center gap-3 text-decoration-none transition-all github-link"
            style={{ color: 'inherit' }}
          >
            <i className="bi bi-github" style={{ fontSize: '2.5rem' }}></i>
            <div className="text-start">
              <h5 className="mb-0 fw-semibold">Explora el código en GitHub</h5>
              <small className="muted-copy">Contribuye o revisa la arquitectura del proyecto</small>
            </div>
          </a>
        </div>
      </section>

      <section className="glass-panel rounded-5 p-4 p-lg-5">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <h2 className="fw-semibold mb-3">Dash board.</h2>
            <p className="mb-0 muted-copy">
              inicio de sesión c y podras ver un dashboard privado donde luego 
              podemos guardar gastos reales por usuario.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link to="/dashboard" className="btn primary-button">
              Ver panel
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}