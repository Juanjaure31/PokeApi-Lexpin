import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../../public/7.svg'
import Card from './Favorite';

// const [favorites, setFavorites] = useState([]);


// useEffect(() => {
//   setFavorites(storedFavorites);
// }, []);



const FavoritosModal = ({ onClose }) => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log(storedFavorites);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Mis Pokemons Favoritos</h2>
        {/* <p>Aquí deberían mostrarse los pokemons favoritos...</p> */}
        <div className="dropown-menu">
          {/*{storedFavorites.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}*/}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLink, setShowLink] = useState(true);
  // const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // const [storedFavorites, setFavorites] = useState([]);
  // const [storedFavorites, setFavorites] = useState([]);
  
  // setFavorites([]);

  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //   setFavorites(storedFavorites);
  // }, []);

  const handleFavoritosClick = () => {
    setShowModal(true);
    setShowLink(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowLink(true);
  };

  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // console.log(storedFavorites);

  return (
    <nav>
      <img src="/7.svg" alt="Pokemon" />
      {showLink && <a href="#" onClick={handleFavoritosClick}>Favoritos</a>}
      {showModal && <FavoritosModal  onClose={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;