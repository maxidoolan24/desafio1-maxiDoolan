
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes,Route } from "react-router-dom";



// 1 hora 6 

function App() {
  /*  const motos = [
    {id: 1, nombre:"tornado", precio:20},
    {id: 2, nombre:"xtz", precio:30},
    {id: 3, nombre:"kx", precio:40}

  ];
  
  const detalles = motos.map(moto => console.log(`${moto.id}-${moto.nombre}-${moto.precio}`))
  console.log(detalles);
 */
  // promesas 
  /* 

  const promesa = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(motos);
    },3000);
  });

  promesa.then((motos)=>{
    console.log(motos);
  })
  .finally(()=>{
    console.log("ya no hay motos por ver ");
  })




  const tarea = new Promise ((resolve, reject)=>{
    resolve("resuelta ")
  })
  tarea.then(resultado =>{
    console.log(resultado);
  },err =>{
    console.log(err);
  })
  .catch(err =>{
    console.log("ha habido un error " + err);
  })
  .finally(() => {
    console.log("el proceso a terminado ");
  }) */
  
  return (
    <BrowserRouter classname="app">
      <NavBar/>


      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route path="/detalle/:idMoto" element={<ItemDetailContainer/>}/>
      
     
      </Routes>
      
      
      <Footer/>
    

    </BrowserRouter>
  )
}

export default App
