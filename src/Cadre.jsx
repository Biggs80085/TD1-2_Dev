import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './Cadre.css'
//import image from '/gameOfThrones.jfif'

const Cadre = ({ serie }) => {
  //const [count, setCount] = useState(0)
  // const test = image
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
