import styled from "styled-components";
import Cadre from './cadre'
import React, { useState, useEffect } from 'react';

const H1 = styled.h1`
  text_aline:center;
`;
function App() {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/series.json');
        const data = await response.json();
        setSeriesData(data.series_preferees);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []); 


  return (
    <>
      <H1>Liste des series</H1>
        {seriesData.map((serie) => (
            <Cadre serie={serie}/>
        ))}
    </>
  )
}

export default App
