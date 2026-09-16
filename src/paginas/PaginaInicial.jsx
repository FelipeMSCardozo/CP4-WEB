import { Link } from 'react-router-dom'
import GradeSeries from '../componentes/GradeSeries'

const dadosBase = [
  {
    id: 13,
    nome: 'The Flash',
    genero: 'Ação',
    nota: '7,5',
    imagem: 'https://static.tvmaze.com/uploads/images/medium_portrait/448/1121792.jpg',
    resumo: 'Depois que um acelerador de partículas provoca uma tempestade e um raio o atinge, Barry Allen fica em coma. Meses depois, ele acorda com o poder da supervelocidade e passa a proteger Central City. Ao lado da equipe da S.T.A.R. Labs, Barry também descobre que outras pessoas foram afetadas pelo acidente.'
  },
  {
    id: 49,
    nome: 'Brooklyn Nine-Nine',
    genero: 'Comédia',
    nota: '8,1',
    imagem: 'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007484.jpg',
    resumo: 'Jake Peralta é um detetive talentoso e descontraído da 99ª delegacia do Brooklyn. A rotina muda quando o exigente capitão Ray Holt assume o comando e decide transformar a equipe em uma das melhores da cidade.'
  },
  {
    id: 116,
    nome: 'The Mentalist',
    genero: 'Drama',
    nota: '8,2',
    imagem: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1239.jpg',
    resumo: 'Patrick Jane é um consultor independente do Departamento de Investigação da Califórnia. Com uma capacidade impressionante de observar detalhes, ele ajuda a equipe a resolver crimes enquanto lida com seu passado de falso médium.'
  },
  {
    id: 161,
    nome: 'Dexter',
    genero: 'Drama',
    nota: '8,4',
    imagem: 'https://static.tvmaze.com/uploads/images/medium_portrait/498/1246067.jpg',
    resumo: 'Dexter Morgan trabalha como especialista forense em Miami e passa os dias ajudando a solucionar crimes. À noite, porém, ele segue outra vida como assassino em série, tentando controlar seus impulsos seguindo um rígido código próprio.'
  },
  {
    id: 4,
    nome: 'Arrow',
    genero: 'Ação',
    nota: '7,4',
    imagem: 'https://static.tvmaze.com/uploads/images/medium_portrait/143/358967.jpg',
    resumo: 'Depois de passar cinco anos desaparecido em uma ilha isolada, o bilionário Oliver Queen volta para casa. Mudado pela experiência, ele decide combater o crime e começa uma guerra particular contra os criminosos de sua cidade.'
  },
  {
    id: 169,
    nome: 'Breaking Bad',
    genero: 'Drama',
    nota: '9,2',
    imagem: 'https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg',
    resumo: 'Walter White é um professor de química do Novo México que recebe o diagnóstico de um câncer grave. Pensando no futuro financeiro da família, ele entra no mundo das drogas usando seu conhecimento de química e começa uma transformação que muda completamente sua vida.'
  }
]

function PaginaInicial({ favoritos, mudarFavorito }) {
  return (
    <section className="largura pagina">
      <div className="introducao">
        <h1>Serello</h1>
        <p>Escolha uma série para assistir agora ou deixe salva para ver depois.</p>
        <Link to="/descobrir" className="botao">Descobrir séries</Link>
      </div>

      <div className="titulo-secao">
        <div>
          <h2>Séries</h2>
          <p>Algumas séries para você começar.</p>
        </div>
        <span>{dadosBase.length} séries</span>
      </div>

      <GradeSeries series={dadosBase} favoritos={favoritos} mudarFavorito={mudarFavorito} />
    </section>
  )
}

export { dadosBase }
export default PaginaInicial
