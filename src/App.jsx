import styled from "styled-components";
import Cadre from './cadre'
import React, { useState, useEffect } from 'react';

const H1 = styled.h1`
  text_aline:center;
`;
const DivSeries = styled.div`
  position: absolute;
  margin-top:20px;
  visibility:${props => (props.visibleSeries ? 'visible' : 'hidden')};
`;
const DivCount = styled.div`
  position: absolute;
  margin-top:20px;
  border:1px gray solid;
  padding:20px;
  border-radius:30px;
  visibility:${props => (props.visibleCount ? 'visible' : 'hidden')};
`;
const DivSeconds = styled.div`
  position: absolute;
  margin-top:20px;
  border:1px gray solid;
  padding:20px;
  border-radius:30px;
  visibility:${props => (props.visibleSeconds ? 'visible' : 'hidden')};
`;
const Affiche = styled.div`
  
`;
const Input = styled.input`
  border-radius: 30px;
  border: 2px gray solid;
  padding-left:5px;
`;
const Button = styled.button`
  background: transparent;
  border: 2px gray solid;
  border-radius: 30px;
  padding:3px 15px;
  margin-left: 10px;
  &:hover{
    background:gray;
    color:white;
  }
`;
const Text = styled.p`
`;
function App() {
  const [seriesData, setSeriesData] = useState([]);
  const [visibleSeries, setVisibleSeries] = useState(false);
  const [visibleCount, setVisibleCount] = useState(false);
  const [visibleSeconds, setVisibleSeconds] = useState(false);

  const handleVisibleSeries = () => {
    setVisibleSeries(!visibleSeries);
    if(visibleSeries === false){
      setVisibleCount(false)
      setVisibleSeconds(false)
    }
  };
  const handleVisibleCount = () => {
    setVisibleCount(!visibleCount);
    if(visibleCount === false){
      setVisibleSeries(false)
      setVisibleSeconds(false)
    }
    
  };
  const handleVisibleSeconds = () => {
    setVisibleSeconds(!visibleSeconds);
    if(visibleSeconds === false){
      setVisibleCount(false)
      setVisibleSeries(false)
    }
  };
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

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const [seconds, setSeconds] = useState(6);

  const increment = () => {
    setCount(count + value);
  };
  const decrement = () => {
    setCount(count - value);
  };
  const handleInputChange = (e) => {
    setValue(parseInt(e.target.value))
  };

  useEffect(() => {
    if(seconds < 0){
      setSeconds(0)
    }
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
 

    return () => clearInterval(interval);
  }, []);

  // TD1&2
  /*return (
    <>
      <H1>Liste des series</H1>
        {seriesData.map((serie) => (
            <Cadre serie={serie}/>
        ))}
    </>
  )*/

  //TD 3
  return (
  <>
    <Button onClick={handleVisibleSeries}>Series</Button>
    <Button onClick={handleVisibleCount}>count</Button>
    <Button onClick={handleVisibleSeconds}>Seconds</Button>
    <DivSeries visibleSeries={visibleSeries}>
      <H1>Liste des series</H1>
        {seriesData.map((serie) => (
            <Cadre serie={serie}/>
        ))}
    </DivSeries>
    <DivCount visibleCount={visibleCount}>
      <Affiche>
        <Text>Nombre: {count}</Text>
        <Text>Incremente ou décremente par {value}</Text>
      </Affiche>
      <Input type="number"
        value={value}
        onChange={handleInputChange}/>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </DivCount>
    <DivSeconds visibleSeconds={visibleSeconds}>
      <Text>Le temps restant: {seconds > 0 ? seconds : 0}s</Text>
    </DivSeconds>
  </>
  )
}

export default App
