import GradeSeries from '../componentes/GradeSeries'

function PaginaLista({ favoritos, mudarFavorito }) {
  return (
    <section className="largura pagina">
      <div className="titulo-secao grande">
        <div>
          <h1>Minha lista</h1>
          <p>Aqui ficam as séries que você escolheu assistir mais tarde.</p>
        </div>
      </div>

      <GradeSeries series={favoritos} favoritos={favoritos} mudarFavorito={mudarFavorito} />
    </section>
  )
}

export default PaginaLista
