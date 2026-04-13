export function Footer() {
  return (
    <footer className="footer-shell mt-auto">
      <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <p className="fw-semibold mb-1">Daily Glass</p>
          <p className="mb-0 muted-copy small">
            Seguimiento diario de gastos con una experiencia ligera y enfocada.
          </p>
        </div>

        <div className="text-md-end">
          <p className="mb-1 small muted-copy">Mongo Atlas ready</p>
          <p className="mb-0 small">2026 · Finanzas personales con estilo minimalista</p>
        </div>
      </div>
    </footer>
  );
}
