import { useContext, useState } from "react"
import FormularioCheckout from "./FormularioCheckout"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import db from "../../db/Db"
import "./form.css"


const Checkout = () => {
    const [datosForm , setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        repetirEmail: "",
        direccion: ""
    });

    
    const { Carrito, precioTotal } = useContext(CartContext);
    const [idOrden,setIdOrden] = useState(null)

    const guardarDatosInput = (event) => { 
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const enviarOrden = (event) => {
        event.preventDefault();
        const orden = {
            comprador : {...datosForm},
            productos : [...Carrito],
            fecha: Date.now(),
            estado: "no entregado",
            total : precioTotal(),

        } 

        // comparamos que los email sean iguales 
        if (datosForm.email !== datosForm.repetirEmail) {
            alert("los campos de email deben ser iguales")
            return
        }



        // subimos la orden a fire base
        const ordenesRef = collection(db,"ordenes")
        addDoc(ordenesRef, orden)
        .then((respuesta)=> {
            setDatosForm({
                nombre : "",
                telefono : "",
                email : "",
                repetirEmail : " ",
                direccion : ""
            })
            setIdOrden(respuesta.id)
        })
    };
        
    
    return (
        <div >
            {
                idOrden ? (
                    <div className="contenedor">
                        <h2>orden generada con exito </h2>
                        <p>guarde el id de su orden: {idOrden}</p>
                    </div>
                ) : (
                    <FormularioCheckout 
                    datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden}/>

                )
            }
            
            
        </div>
    );
};

export default Checkout;