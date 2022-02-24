import logo from './logo.svg';
import Header from './Header';
import './App.css';
import Counter from './Counter'

function App() {
  return (
    <div>
      <Header name="ProgBr" links={["Sobre", "Comprar", "Contato", "Comprar"]}></Header>
      <Counter></Counter>
    </div>
    );
}

export default App;
