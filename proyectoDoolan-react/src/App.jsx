
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';




function App() {
  return (
    <> 
    <NavBar/>
    <ItemListContainer greeting = "bienvenido a mi tienda"/>

    </>
  )
}

export default App
