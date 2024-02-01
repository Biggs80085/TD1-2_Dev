import './Cadre.css'

const Cadre = ({ serie }) => {
  return (
    <>
      <div class="cadre">
        <img
            src={serie.image}
            alt="Image de la serie" />
        <ul>
          <li>
            <h2>{serie.nom}</h2>
            <p>Note: {serie.note}</p>
            <p>Genre: {serie.donnees.genre}</p>
            <p>Année de sortie: {serie.donnees.annee_de_sortie}</p>
            <p>Réalisateur:</p>
            <ul>
              {serie.donnees.createurs.map((realisateur) => (
                <ol>{realisateur}</ol>
              ))}
            </ul>
            <p>Acteurs Principaux:</p>
            <ul>
              {serie.donnees.acteurs_principaux.map((acteur) => (
                <ol>{acteur}</ol>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Cadre
