
import CampoTexto from './componentes/CampoTexto';
import Banner from './componentes/banner/Banner.js';


function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder='Digite o seu nome'/>
      <CampoTexto label="Cargo" placeholder='Digite seu cargo'/>
      <CampoTexto label="Imagens" placeholder='coloque o endereço da imagem do funcionário'/>
      
    </div>
  );
}

export default App;
