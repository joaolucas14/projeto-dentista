import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./componentes/Menu";
import Banner from "./componentes/Banner";
import FaixaTexto from "./componentes/FaixaTexto";
import Vantagens from "./componentes/Vantagens";
import Especialidade from "./componentes/Especialidades";
import Procedimentos from "./componentes/Procedimentos";
import Clinica from "./componentes/Clinica";

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
    </>
  );
}

export default App;
