import styled from 'styled-components';
import './App.css';
import Home from './components/Home';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px, 0, 10px;
`;

const Header = styled.span`
color: blue;
font-size: 1.2em;
font-weight: bold;
`;


function App() {
  return (
    <Container>
      <Header>Expense Tracker App</Header>
      <Home />
    </Container>
  );
}

export default App;
