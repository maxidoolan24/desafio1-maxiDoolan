import { useState } from "react"

const EjemploFormulario = () => {
    const [nombre ,setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email,setEmail] = useState("")

    const cambiarNombre = (event) =>{
        setNombre(event.target.value)
    }
    const cambiarDirecciom = (event) =>{
        setDireccion(event.target.value)
    }
    const cambiarEmail = (event) =>{
        setEmail(event.target.value)
    }
    const enviarFormulario = (event) =>{
        event.preventDefault()
        const usuario = {nombre,direccion,email}
        console.log(usuario);
    }


  return (
    <form  onSubmit={enviarFormulario}>
        <label>
            nombre:
            <input type="text" value={nombre} onChange={cambiarNombre}/>
        </label>
        <label>
            direccion:
            <input type="text" value={direccion} onChange={cambiarDirecciom}/>
        </label>
        <label>
            Email:
            <input type="email" value={email} onChange={cambiarEmail}/>
        </label>

        <button type="submit">enviar</button>
    </form>
  )
}

export default EjemploFormulario