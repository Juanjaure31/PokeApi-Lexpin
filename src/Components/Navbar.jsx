import React, { useState } from 'react';
import './Navbar.css';
import '../../public/7.svg'

const FavoritosModal = ({ onClose }) => {
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem('favoritePokemons')) || []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favoritos.filter(pokemon => pokemon.id !== id);
    setFavoritos(updatedFavorites);
    localStorage.setItem('favoritePokemons', JSON.stringify(updatedFavorites));
    
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Mis Pokemons Favoritos</h2>
        {favoritos.length > 0 ? (
          <div className="favoritos-container">
            {favoritos.map(pokemon => (
              <div key={pokemon.id} className="favorito" >
                <p className="favorito-nombre">#{pokemon.id} - {pokemon.nombre}</p>
                <button onClick={() => handleRemoveFavorite(pokemon.id)}>-</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No tienes Pokémon favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLink, setShowLink] = useState(true);

  const handleFavoritosClick = () => {
    setShowModal(true);
    setShowLink(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowLink(true);
  };

  return (
    <nav>
      <img src="/7.svg" alt="Pokemon" />
      {showLink && <a href="#" onClick={handleFavoritosClick}>Favoritos</a>}
      {showModal && <FavoritosModal onClose={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;