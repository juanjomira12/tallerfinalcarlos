import { useEffect, useState } from 'react';

export const ApiPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results || []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  return (
    <section className="py-5" style={{ paddingTop: '7rem' }}>
      <div className="container">
        <div className="glass-panel rounded-5 p-4 p-lg-5 mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <span className="section-chip mb-2">API externa</span>
              <h1 className="h2 fw-semibold mb-2">Personajes desde Rick and Morty API</h1>
              <p className="mb-0 muted-copy">
                Recuperamos datos desde una API publica para conservar ese apartado dentro del nuevo tema visual.
              </p>
            </div>

            <button
              type="button"
              className="btn primary-button"
              onClick={() => setPage((currentPage) => currentPage + 1)}
            >
              Siguiente pagina ({page})
            </button>
          </div>
        </div>

        <div className="row g-4">
          {characters.map((character) => (
            <div className="col-12 col-md-6 col-xl-4" key={character.id}>
              <article className="expense-card h-100 overflow-hidden">
                <img
                  src={character.image}
                  className="card-img-top"
                  alt={character.name}
                />
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                    <h2 className="h5 fw-semibold mb-0">{character.name}</h2>
                    <span className="expense-pill">{character.status}</span>
                  </div>
                  <p className="mb-1 muted-copy">{character.species}</p>
                  <p className="mb-0 small muted-copy">Pagina actual: {page}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
