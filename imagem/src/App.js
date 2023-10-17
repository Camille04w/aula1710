import minhaImagem from './img/bolo.jpg'
import NoticiaComponente from './components/NoticiaComponentes'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <NoticiaComponente 
      titulo='Essa é a receita'
      imagem={minhaImagem}
      alt='Bolo de chocolate'
      descricao='O melhor bolo do mundo'
      categoria='comida'
      />
    </div>
  );
}

export default App;
