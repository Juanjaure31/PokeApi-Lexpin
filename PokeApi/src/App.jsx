import './Components/pokemones.css'
// import usePokemones from './hooks/usePokemones'
import Pokemones from './Components/Pokemones'
import Buscador from './Components/Buscador'
import Navbar from './Components/Navbar'
import './App.css'

function App() {

  
  return (
    <>
      <Navbar />
      <Buscador />
      <Pokemones />
    </>
  )
}

export default App