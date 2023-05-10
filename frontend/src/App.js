import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './components/Heading';
import Container from 'react-bootstrap/esm/Container';
import Searchbar from './components/Searchbar';


function App() {
  return (
    <>
    <Container>
  <br/>
  <Heading/>
  <br />
  <br />
  <Searchbar />
  </Container>
    </>
  );
}

export default App;
