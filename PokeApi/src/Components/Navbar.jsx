import React, { useState } from 'react';
import './Navbar.css';
import '../../public/7.svg'

const FavoritosModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Mis Pokemons Favoritos</h2>
        <p>Aquí deberían mostrarse los pokemons favoritos...</p>
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