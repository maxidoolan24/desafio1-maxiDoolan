import { createContext , useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [Carrito , setCarrito] = useState([])
    const añadirProductoAlCarrito = (productoNuevo) => {

        const condicion = estaEnelcarrito(productoNuevo.id)

        if (condicion) {
             const productosModificados = Carrito.map((motoCarrito) => {
                if (motoCarrito.id === productoNuevo.id) {
                    return { ...motoCarrito, cantidad: motoCarrito.cantidad + productoNuevo.cantidad}
                }else {
                    return motoCarrito
                }
             } )
             setCarrito(productosModificados)
        }else{
            setCarrito([...Carrito,productoNuevo])

        
        }

        

          
    }
    const estaEnelcarrito = (idMoto) =>{
        const respuesta = Carrito.some((moto) => moto.id === idMoto)
        return respuesta

    }

    const cantidadTotal = () =>{
        const cantidad = Carrito.reduce((total, moto)=> total + moto.cantidad, 0 )
        return cantidad 
    }

    const precioTotal = () =>{
        const total = Carrito.reduce((total, moto)=> total + (moto.cantidad * moto.precio), 0)
        return total   
    }

    const borrarTodo = () =>{
        setCarrito([])
    }
    
    const borrarProducto = (idMoto) =>{
        const productosFiltrados = Carrito.filter((moto)=> moto.id !== idMoto)
        setCarrito(productosFiltrados)

    }

 
  


return(
    <CartContext.Provider value={ {Carrito,añadirProductoAlCarrito, cantidadTotal, precioTotal, borrarTodo , borrarProducto} }>
        {children}
    </CartContext.Provider>
)
}

export {CartProvider , CartContext}