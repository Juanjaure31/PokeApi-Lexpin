import Navbar from './Components/Navbar'
import './Components/pokemones.css'
// import usePokemones from './hooks/usePokemones'
import Pokemones from './Components/Pokemones'
import './App.css'
function App() {

  
  return (
    <>
      { <Navbar /> }
      <Pokemones />
    </>
  )
}

export default App