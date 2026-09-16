import { Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

function CartaoSerie({ serie, favorito, mudarFavorito }) {
  return (
    <article className="cartao">
      <Link to={'/serie/' + encodeURIComponent(serie.nome)} className="imagem-cartao">
        {serie.imagem ? <img className="imagem-serie" src={serie.imagem} alt={serie.nome} /> : <div className="imagem-sem-conteudo">{serie.nome}</div>}
      </Link>

      <div className="cartao-conteudo">
        <h3>{serie.nome}</h3>
        <p>{serie.genero}</p>

        <div className="cartao-rodape">
          <span className="nota"><Star size={15} /> {serie.nota || 'Sem nota'}</span>
          <button onClick={() => mudarFavorito(serie)} className="botao-lista">
            <Heart size={18} fill={favorito ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CartaoSerie
