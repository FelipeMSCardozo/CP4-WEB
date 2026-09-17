import { Heart, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Cabecalho({ quantidade }) {
  return (
    <header className="cabecalho">
      <div className="largura cabecalho-conteudo">
        <NavLink to="/" className="marca">Serello</NavLink>

        <nav className="navegacao">
          <NavLink to="/" className="link">Início</NavLink>
          <NavLink to="/descobrir" className="link"><Search size={17} /> Descobrir</NavLink>
          <NavLink to="/minha-lista" className="link"><Heart size={17} /> Minha lista ({quantidade})</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
