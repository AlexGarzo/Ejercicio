import { useState } from 'react';
import {useForm} from 'react-hook-form'
import TarjetaPerfil from './TarjetaPerfil';

export default function App() {

  const [datosEnviados, setDatosEnviados] = useState({
  nombre: "",
  apellido: "",
  documento: "",
  cargo: ""
})

  const {register, handleSubmit, formState:{errors}
  } = useForm();

  console.log(errors)
  
  const onSubmit = handleSubmit((data) => {
  setDatosEnviados({
    nombre: data.nombre,
    apellido: data.apellido,
    documento: data.documento,
    cargo: data.cargo
  })
})

  return (
  <form onSubmit={onSubmit}>
  <label htmlFor="nombre">Nombre </label>
  <input type="text" 
  {...register("nombre", {required: true,
  minLength: 3
  })} />

  {errors.nombre?.type === "required" && ( <span className="error-nombre">Nombre requerido</span>
  )}

  {errors.nombre?.type === "minLength" && ( <span className="error-nombre">El Nombre debe contener al menos 3 caracteres</span>
  )}



  <label htmlFor="apellido">Apellido </label>
  <input type="text"
  {...register("apellido")} />

  <label htmlFor="documento">Documento </label>
  <input type="text" 
    {...register("documento")} />

  <label htmlFor="rol">Cargo</label>
  <input type="text" 
  {...register("cargo", {required: true})} />
  
  {
    errors.cargo && (<span className="error-cargo">Cargo requerido</span>
  )}

  <br />
  <button type="submit">Enviar</button>
  <br />
  <br />

<TarjetaPerfil 
  nombre={datosEnviados.nombre}
  apellido={datosEnviados.apellido}
  documento={datosEnviados.documento}
  cargo={datosEnviados.cargo}
/>

  </form>
  )
}
