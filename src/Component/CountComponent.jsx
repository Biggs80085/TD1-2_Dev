import styled from "styled-components";
import React, { useState, useEffect } from 'react';

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
const DivCount = styled.div`
  position: absolute;
  margin-top:20px;
  border:1px gray solid;
  padding:20px;
  border-radius:30px;
`;
const Affiche = styled.div`
  
`;
const Text = styled.p`
`;
const Input = styled.input`
  border-radius: 30px;
  border: 2px gray solid;
  padding-left:5px;
`;
const CountComponent = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1);
  
    const increment = () => {
      setCount(count + value);
    };
    const decrement = () => {
      setCount(count - value);
    };
    const handleInputChange = (e) => {
      setValue(parseInt(e.target.value))
    };
    return (
        <DivCount>
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
    );
};

export default CountComponent;