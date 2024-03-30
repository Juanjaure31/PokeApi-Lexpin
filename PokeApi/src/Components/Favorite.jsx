import './Favorite.css';
import React, { useState, useEffect } from 'react';

const Card = ({ id, title, content }) => {
  const [liked, setLiked] = useState(false);

  // Cargar el estado inicial de "me gusta" desde Local Storage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setLiked(favorites.includes(id));
  }, [id]);

  // Actualizar Local Storage cuando el estado de "me gusta" cambia
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (liked) {
      if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    } else {
      const newFavorites = favorites.filter(favoriteId => favoriteId !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  }, [liked, id]);

  // Manejar clic en el botón de "me gusta"
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button className={`like-icon ${liked ? 'liked' : ''}`} alt="Me gusta" onClick={handleLike}>
        <span> 
          🤍
        </span>
      </button>
    </div>
  ); 
};

export default Card;
