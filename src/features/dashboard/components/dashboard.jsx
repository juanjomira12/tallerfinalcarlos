const summaryCards = [
  { title: 'Gasto del dia', value: '$48.900', note: '4 movimientos registrados' },
  { title: 'Disponible semanal', value: '$211.000', note: 'Te quedan 3 dias de control' },
  { title: 'Ahorro del mes', value: '$384.000', note: '12% por encima de tu meta' },
];

const movements = [
  { concept: 'Mercado rapido', category: 'Hogar', amount: '$28.000', status: 'Necesario' },
  { concept: 'Taxi', category: 'Movilidad', amount: '$18.000', status: 'Variable' },
  { concept: 'Cafe y snack', category: 'Comida', amount: '$9.500', status: 'Pequeno' },
  { concept: 'Transferencia a ahorro', category: 'Meta', amount: '$25.000', status: 'Positivo' },
];

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('daily-expenses-user') || '{}');

  return (
    <section className="dashboard-layout">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <div className="dashboard-card p-4 p-lg-5 h-100">
              <span className="section-chip mb-3">Panel privado</span>
              <h1 className="fw-semibold mb-2">
                {user.name ? `Hola, ${user.name}` : 'Hola'}
              </h1>
              <p className="muted-copy mb-4">
                Este dashboard ya queda protegido por token y listo para ser el siguiente punto donde guardar
                gastos reales en Mongo Atlas por usuario.
              </p>

              <div className="row g-3">
                {summaryCards.map((card) => (
                  <div className="col-md-4" key={card.title}>
                    <div className="expense-card p-3 h-100">
                      <small className="text-uppercase muted-copy">{card.title}</small>
                      <strong className="mt-2">{card.value}</strong>
                      <p className="mb-0 mt-2 muted-copy small">{card.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="dashboard-card p-4 h-100">
              <span className="section-chip mb-3">Estado</span>
              <h2 className="h4 mb-3">Cuenta conectada</h2>
              <p className="muted-copy mb-3">
                {user.email || 'Sin correo disponible'}
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="expense-pill">Mongo Atlas</div>
                <div className="expense-pill">JWT activo</div>
                <div className="expense-pill">Frontend listo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card p-4 p-lg-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
            <div>
              <span className="section-chip mb-2">Movimientos</span>
              <h2 className="h4 mb-0">Actividad reciente</h2>
            </div>
            <span className="muted-copy small">Datos de ejemplo para la nueva experiencia</span>
          </div>

          <div className="table-responsive">
            <table className="table table-soft align-middle mb-0">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Categoria</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {movements.map((movement) => (
                  <tr key={movement.concept}>
                    <td className="fw-semibold">{movement.concept}</td>
                    <td>{movement.category}</td>
                    <td>{movement.amount}</td>
                    <td>
                      <span className="expense-pill">{movement.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
