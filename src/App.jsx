import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'
import PaginaInicial from './paginas/PaginaInicial'
import PaginaDescobrir from './paginas/PaginaDescobrir'
import PaginaSerie from './paginas/PaginaSerie'
import PaginaLista from './paginas/PaginaLista'

function App() {
  const [favoritos, setFavoritos] = useState([])

  function mudarFavorito(serie) {
    let encontrado = false
    let novaLista = []

    for (let i = 0; i < favoritos.length; i++) {
      if (favoritos[i].id === serie.id) {
        encontrado = true
      } else {
        novaLista.push(favoritos[i])
      }
    }

    if (!encontrado) {
      novaLista.push(serie)
    }

    setFavoritos(novaLista)
  }

  return (
    <div className="aplicacao">
      <Cabecalho quantidade={favoritos.length} />
      <main>
        <Routes>
          <Route path="/" element={<PaginaInicial favoritos={favoritos} mudarFavorito={mudarFavorito} />} />
          <Route path="/descobrir" element={<PaginaDescobrir favoritos={favoritos} mudarFavorito={mudarFavorito} />} />
          <Route path="/serie/:nome" element={<PaginaSerie favoritos={favoritos} mudarFavorito={mudarFavorito} />} />
          <Route path="/minha-lista" element={<PaginaLista favoritos={favoritos} mudarFavorito={mudarFavorito} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
