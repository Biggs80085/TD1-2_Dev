import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const DivSeconds = styled.div`
  position: absolute;
  margin-top:20px;
  border:1px gray solid;
  padding:20px;
  border-radius:30px;
`;
const Text = styled.p`
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

const SecondsComponent = () => {
    const [seconds, setSeconds] = useState(60);
    const reset = () => {
      setSeconds(60);
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
    return (
        <DivSeconds>
            <Text>Le temps restant: {seconds > 0 ? seconds : 0}s</Text>
            <Button onClick={reset}>Reset</Button>
        </DivSeconds>
    );
};

export default SecondsComponent;