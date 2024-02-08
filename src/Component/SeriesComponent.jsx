import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Cadre from '../cadre'


const H1 = styled.h1`
  text_aline:center;
`;

const DivSeries = styled.div`
  position: absolute;
  margin-top:20px;
`;
const SeriesComponent = () => {

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
        <DivSeries>
            <H1>Liste des séries</H1>
            {seriesData.map((serie) => (
                <Cadre serie={serie}/>
            ))}
        </DivSeries>
    );
};

export default SeriesComponent;