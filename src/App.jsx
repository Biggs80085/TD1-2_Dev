import styled from "styled-components";
import Cadre from './cadre'
import React, { useState, useEffect } from 'react';

const H1 = styled.h1`
  text_aline:center;
`;
const Div = styled.div`
  margin: 10% 39%;
  border:1px gray solid;
  padding:20px 0px 20px 20px;
  border-radius:30px;
`;
const Affiche = styled.div`
  
`;
const Input = styled.input`
  border-radius: 30px;
  border: 2px gray solid;
  padding-left
`;
const Button = styled.button`
  background: transparent;
  border: 2px gray solid;
  border-radius: 30px;
  width:50px;
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
    <Div>
      <Affiche>
        <Text>Nombre: {count}</Text>
        <Text>Incremente ou décremente par {value}</Text>
      </Affiche>
      <Input type="number"
        value={value}
        onChange={handleInputChange}/>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </Div>
    <Div>
      <Text>Le temps restant: {seconds > 0 ? seconds : 0}s</Text>
    </Div>
  </>
  )
}

export default App
