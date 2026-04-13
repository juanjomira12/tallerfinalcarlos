import React, { useState, useEffect } from 'react'

export const ApiRyC = () => {
  const [characters, setCharacters] = useState([]); 
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
      })
      .catch(err => console.log(err));
  }, [page]);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-uppercase">Personajes RyM</h2>
        <button 
          className="btn btn-warning fw-bold" 
          onClick={() => setPage(page + 1)}
        >
          Siguiente Página ({page})
        </button>
      </div>

      {/* El row con g-4 da espacio entre tarjetas */}
      <div className="row g-4">
        {characters && characters.map((char) => (
          /* col-md-4 hace que salgan 3 por fila en pantallas medianas/grandes */
          <div className="col-12 col-md-4" key={char.id}>
            
            {/* Agregamos una clase personalizada 'card-hover' para el efecto */}
            <div className="card h-100 border-0 shadow-sm card-hover overflow-hidden">
              <img 
                src={char.image} 
                className="card-img-top" 
                alt={char.name} 
              />
              <div className="card-body bg-dark text-white text-center">
                <h5 className="card-title fw-bold text-warning">{char.name}</h5>
                <p className="card-text small mb-0">
                  <span className={`badge ${char.status === 'Alive' ? 'bg-success' : 'bg-danger'} me-2`}>
                    {char.status}
                  </span>
                  {char.species}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Estilos para el efecto Hover */}
      <style>{`
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
          border: 1px solid #ffc107 !important;
        }
      `}</style>
    </div>
  )
}