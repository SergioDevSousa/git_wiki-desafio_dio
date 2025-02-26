import { useState } from 'react';
import gitlogo from '../assets/image/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';

function App() {
  const [repos, setRepos] = useState ([]);



  return (
    <Container >
        <img src={gitlogo} width={72} height={72} alt="logo github"/>
        <Input />
        <Button />
        <ItemRepo />
    </Container>
  );
}

export default App;
