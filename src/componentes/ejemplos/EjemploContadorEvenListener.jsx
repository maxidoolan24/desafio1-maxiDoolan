import { useEffect, useState } from "react"


const EjemploContadorEvenListener = () => {
  const [contador, setContador] = useState(1)
  useEffect(() =>{
    const botonSumar = document.getElementById("sumar")
    const handleClick = () =>{
        setContador(contador + 1)


    }

    botonSumar.addEventListener("click", handleClick)

    //esta funcion se ejecuta cuando nuestro componente se desmonta
    return() =>{
        botonSumar.removeEventListener("click",handleClick)

    }



  }, [contador] )
    return (
    <div>
    <p>{contador}</p>
    <button id="sumar"> + </button>


    </div>
  )
}

export default EjemploContadorEvenListener