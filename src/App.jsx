import Header from "./componentes/header"
import ListadoPaciente from "./componentes/ListadoPaciente"
import Formulario from "./componentes/Formulario"
import Error from "./componentes/Error"
import Pacientes from "./componentes/Pacientes"


function App() {

  return (
    <div className="container mx-auto mt-15">
      <Header />
      <ListadoPaciente />
      <Formulario />
      <Pacientes />
      <Error />


    </div>
  )
}
export default App