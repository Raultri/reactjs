import './App.css'
import ComponenteContenedor from './components/ComponentesContenedor/Componente'
import NavBar from './components/Navbar/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar />
      <ComponenteContenedor saludo="Planeta Triatlón" />
    </div>
  )
}

export default App
