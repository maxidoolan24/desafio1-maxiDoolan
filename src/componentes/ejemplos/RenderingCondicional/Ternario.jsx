import { useEffect, useState } from "react"


const Ternario = () => {

  const [cargando , setCargando] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      setCargando(false)
    },3000)


  }, [])
  return (
    <div>
      <h2>practicando operador ternario</h2>
      {
        cargando ? <h3>cargando...</h3> : <h3>cargado con exito </h3>
      }
    </div>
  )
}

export default Ternario