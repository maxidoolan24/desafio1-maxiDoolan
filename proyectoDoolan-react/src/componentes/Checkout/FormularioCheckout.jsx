import "./form.css"


const FormularioCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
      <div>
          <form  className="form" onSubmit={enviarOrden}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />
              
              <label htmlFor="telefono">Teléfono</label>
              <input type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput}/>
              
              <label htmlFor="email">Repetir Email</label>
              <input type="email" id="repetirEmail" name="repetirEmail" value={datosForm.repetirEmail} onChange={guardarDatosInput}/>

              <label htmlFor="direccion">Dirección</label>
              <input type="text" id="direccion" name="direccion" value={datosForm.direccion} onChange={guardarDatosInput}/>

              <button type="submit">Enviar orden</button>
          </form>
      </div>
  );
};

export default FormularioCheckout;