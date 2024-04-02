import './pokemones.css'
import usePokemones from '../hooks/usePokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from './Cargando'
import DetallePokemon from './DetallePokemon'
import Buscador from './Buscador'
//import Buscador from './Buscador'
import { useState } from 'react'

function Pokemon({ id, nombre, imagen, verPokemon }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = (e) => {
    e.stopPropagation(); // Evitar que se propague el evento click al contenedor principal
    const favoritos = JSON.parse(localStorage.getItem('favoritePokemons')) || [];
    const alreadyAddedIndex = favoritos.findIndex(pokemon => pokemon.id === id);

    if (alreadyAddedIndex === -1) {
      const nuevoPokemon = { id, nombre, imagen };
      favoritos.push(nuevoPokemon);
      setIsFavorite(true); // Cambiar el estado a favorito
    } else {
      favoritos.splice(alreadyAddedIndex, 1);
      setIsFavorite(false); // Cambiar el estado a no favorito
    }

    localStorage.setItem('favoritePokemons', JSON.stringify(favoritos));
  };

  return (
    <div className='pokemon-card' onClick={verPokemon}>
      <img src={imagen} alt={nombre} className='pokemon-imagen' />
      <p className='pokemon-titulo'>
        <span>#{id}</span>
        <span>{nombre}</span>
      </p>
      <button className={`add-favorite-btn ${isFavorite ? 'favorite' : ''}`} onClick={handleAddToFavorites}>
        <span role="img" aria-label="heart">{isFavorite ? '❤️' : '🖤'}</span>
      </button>
    </div>
  );
}

function Pokemones() {

  const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones()
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
  const [busqueda, setBusqueda] = useState('')

  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })

  const noVerPokemon = () => {
    setMostrar({ mostrar: false, pokemon: {}})
    setBusqueda('')
  }

  const buscarPokemon = async (e) => {
    e.preventDefault()

    if (!busqueda) return

    const pokemon = await searchPokemon(busqueda)
    console.log(pokemon);
    setMostrar({ mostrar: true, pokemon })
  }
  
  return (
    <>
      {<DetallePokemon {...mostrar} cerrar={noVerPokemon}/>}
      {<Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon}/>}
      <InfiniteScroll
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Cargando />}
        endMessage={
          <h3 className='titulo' style={{ gridColumn: '1/6' }}>Lo siento, no hay más pokemones por mostrar</h3>
        }
        className='pokemon-container'
      >
        { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)}/> )}
      </InfiniteScroll>
    </>
  )
}

export default Pokemones