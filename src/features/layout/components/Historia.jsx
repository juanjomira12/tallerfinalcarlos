import React from 'react';
import { Link } from 'react-router-dom';

export const Historia = () => { // Verifica si prefieres "Historia" o "History"
  const hitos = [
    {
      titulo: "El Nacimiento del Tag",
      epoca: "1960 - 1970",
      img: "./img/takijpg.jpg",
      texto: "Todo comenzó en las calles de Filadelfia y Nueva York. Jóvenes como TAKI 183 empezaron a escribir sus nombres en todas partes para reclamar su espacio en la ciudad."
    },
    {
      titulo: "Estilo Salvaje (Wildstyle)",
      epoca: "1980 - 1990",
      img: "./img/wild.webp",
      texto: "Las letras se volvieron flechas y formas complejas. El graffiti se convirtió en una competencia de técnica y colores vibrantes en los vagones del metro."
    },
     {
      titulo: "Avance al graffiti moderno",
      epoca: "2000- 2020",
      img: "./img/santo.JPG",
      texto: "El graffiti se globalizó y se diversificó,cada persona y ciudad adoptarpm su estilo unico. En medellin el graffiti se convirtió en una forma de expresión social y cultural."
    }
  ];

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold text-uppercase mb-3">
          HISTORIA DEL <span className="text-warning">GRAFFITI</span>
        </h1>
      </div>

      <div className="container">
        {hitos.map((hito, index) => (
          <div key={index} className="row align-items-center mb-5 p-4 bg-black bg-opacity-25 rounded shadow border-start border-warning border-3">
            <div className={`col-md-6 mb-3 mb-md-0 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
              <img src={hito.img} className="img-fluid rounded shadow" alt={hito.titulo} />
            </div>
            <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
              <span className="badge bg-warning text-dark mb-2 px-3">{hito.epoca}</span>
              <h2 className="fw-bold mb-3">{hito.titulo}</h2>
              <p className="text-secondary fs-5">{hito.texto}</p>
            </div>
          </div>
        ))}
        
        {/* Sección final simple */}
        <div className="text-center mt-5">
            <Link to="/" className="btn btn-outline-warning px-5 py-2 fw-bold text-uppercase">
                Volver al Inicio
            </Link>
        </div>
      </div>
    </div>
  );
};