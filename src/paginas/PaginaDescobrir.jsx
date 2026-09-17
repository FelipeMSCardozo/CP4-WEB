import { useState } from 'react'
import GradeSeries from '../componentes/GradeSeries'
import { dadosBase } from './PaginaInicial'

function PaginaDescobrir({ favoritos, mudarFavorito }) {
  const [texto, setTexto] = useState('')

  const resultado = []
  const textoBusca = texto.toLowerCase()

  for (let i = 0; i < dadosBase.length; i++) {
    if (dadosBase[i].nome.toLowerCase().indexOf(textoBusca) >= 0) {
      resultado.push(dadosBase[i])
    }
  }

  return (
    <section className="largura pagina">
      <div className="titulo-secao grande">
        <div>
          <h1>Descobrir</h1>
          <p>Digite o nome e verifique se a série está na lista.</p>
        </div>
      </div>

      <input
        className="campo"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="Digite o nome da série"
      />

      <GradeSeries series={resultado} favoritos={favoritos} mudarFavorito={mudarFavorito} />
    </section>
  )
}

export default PaginaDescobrir
