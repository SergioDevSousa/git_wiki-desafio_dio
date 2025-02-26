import { useState } from 'react';
import gitlogo from '../assets/image/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState ([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`/repos/${currentRepo}`);

      if (data.id) {
        const isDuplicate = repos.some(repo => repo.id === data.id);
        if (!isDuplicate) {
          setRepos(prev => [...prev, data]);
          alert('Repositório adicionado com sucesso!');
        } else {
          alert('Esse repositório já foi adicionado.');
        }
      }
    } catch (error) {
      alert('Erro ao buscar repositório. Verifique o nome e tente novamente.');
      console.error(error);
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  };



  return (
    <Container >
        <img src={gitlogo} width={72} height={72} alt="logo github"/>
        <Input 
        value={currentRepo} 
        onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo repo={repo} onRemove={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
