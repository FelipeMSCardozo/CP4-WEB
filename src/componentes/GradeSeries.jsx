import CartaoSerie from './CartaoSerie'

function GradeSeries({ series, favoritos, mudarFavorito }) {
  if (series.length === 0) {
    return <p className="mensagem">Nenhuma série encontrada.</p>
  }

  return (
    <div className="grade">
      {series.map((serie) => {
        let favorito = false

        for (let i = 0; i < favoritos.length; i++) {
          if (favoritos[i].id === serie.id) {
            favorito = true
          }
        }

        return (
          <CartaoSerie
            key={serie.id}
            serie={serie}
            favorito={favorito}
            mudarFavorito={mudarFavorito}
          />
        )
      })}
    </div>
  )
}

export default GradeSeries
