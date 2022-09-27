import React from 'react';
import styled from 'styled-components';
import Data from './Data';
import Transaction from './Transaction';


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px, 0, 10px;
width: 360px;
`;


function Home (){
    return (
      <Container>
         <Data />
         <Transaction />
      </Container>
    )
  }

export default Home;