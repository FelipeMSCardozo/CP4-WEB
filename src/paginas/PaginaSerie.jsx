import { useEffect, useState } from 'react'
import { Heart, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { dadosBase } from './PaginaInicial'

function PaginaSerie({ favoritos, mudarFavorito }) {
  const { nome } = useParams()
  const [serie, setSerie] = useState(null)

  useEffect(() => {
    async function buscarSerie() {
      const nomeDecodificado = decodeURIComponent(nome)
      let serieEncontrada = null

      for (let i = 0; i < dadosBase.length; i++) {
        if (dadosBase[i].nome.toLowerCase() === nomeDecodificado.toLowerCase()) {
          serieEncontrada = dadosBase[i]
        }
      }

      if (serieEncontrada) {
        try {
          const resposta = await fetch('https://api.tvmaze.com/shows/' + serieEncontrada.id)
          const dados = await resposta.json()

          if (dados.genres && dados.genres.length > 0) {
            serieEncontrada.genero = dados.genres[0]
          }

          if (dados.rating && dados.rating.average) {
            serieEncontrada.nota = String(dados.rating.average).replace('.', ',')
          }
        } catch {
        }
      }

      setSerie(serieEncontrada)
    }

    buscarSerie()
  }, [nome])

  if (!serie) {
    return (
      <section className="largura pagina">
        <p className="mensagem">Série não encontrada.</p>
      </section>
    )
  }

  let favorito = false

  for (let i = 0; i < favoritos.length; i++) {
    if (favoritos[i].id === serie.id) {
      favorito = true
    }
  }

  return (
    <section className="largura pagina">
      <Link to="/" className="voltar">Voltar</Link>

      <div className="detalhe">
        <div className="detalhe-imagem">
          <img src={serie.imagem} alt={serie.nome} />
        </div>

        <div className="detalhe-texto">
          <p className="etiqueta">Sobre a série</p>
          <h1>{serie.nome}</h1>
          <p className="genero">{serie.genero}</p>
          <span className="nota"><Star size={16} fill="currentColor" /> {serie.nota}</span>
          <p className="resumo">{serie.resumo}</p>
          <button className="botao" onClick={() => mudarFavorito(serie)}>
            <Heart size={17} fill={favorito ? 'currentColor' : 'none'} />
            {favorito ? 'Remover da lista' : 'Adicionar à lista'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PaginaSerie
