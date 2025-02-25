import gitlogo from '../assets/image/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

function App() {
  return (
    <Container >
        <img src={gitlogo} width={72} height={72} alt="logo github"/>
        <Input />
        <ItemRepo />
    </Container>
  );
}

export default App;
