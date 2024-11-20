import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./componentes/Menu";
import Banner from "./componentes/Banner";
import FaixaTexto from "./componentes/FaixaTexto";
import Vantagens from "./componentes/Vantagens";
import Especialidade from "./componentes/Especialidades";
import Procedimentos from "./componentes/Procedimentos";
import Clinica from "./componentes/Clinica";
import Avaliacao from "./componentes/Avaliacao";
import Galeria from "./componentes/Galeria";
import Agendamento from "./componentes/Agendamento";
import Localizacao from "./componentes/Localizacao";
import Rodape from "./componentes/Rodape";

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <FaixaTexto />
      <Vantagens />
      <Especialidade />
      <Procedimentos />
      <Clinica />
      <Avaliacao />
      <Galeria />
      <Agendamento />
      <Localizacao />
      <Rodape />
    </>
  );
}

export default App;
