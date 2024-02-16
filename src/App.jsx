
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes,Route } from "react-router-dom";
import Carrito from './componentes/carrito/Carrito';
import { CartProvider } from './context/CartContext';
import RenderingCondicional from './componentes/ejemplos/RenderingCondicional/RenderingCondicional';
import Checkout from './componentes/Checkout/Checkout';





function App() {
 
  
  return (
    <BrowserRouter >
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route path="/detalle/:idMoto" element={<ItemDetailContainer/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/ejemplos" element={<RenderingCondicional/>}/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path='*' element={ <div>pagina no encontrada</div> }/>
       </Routes>
      
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
