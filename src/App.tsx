import {useForm} from 'react-hook-form'

export default function App() {

  const {register, handleSubmit, formState:{errors}
  } = useForm();

  console.log(errors)
  
  const onSubmit = handleSubmit ((data)=> {
    console.log(data)
  }) 
  return (
  <form onSubmit={onSubmit}>
  <label htmlFor="nombre">Nombre </label>
  <input type="text" 
  {...register("nombre", {required: true,
  minLength: 3 })} />

  <label htmlFor="apellido">Apellido </label>
  <input type="text"
  {...register("apellido")} />

  <label htmlFor="documento">Documento </label>
  <input type="text" 
    {...register("documento")} />

  <label htmlFor="rol">Cargo</label>
  <input type="text" 
  {...register("cargo", {required: true})} />
  

  <br />
  <button type="submit">Enviar</button>
  <br />
  <br />
{
  errors.nombre && <span>ESPERANDO DATOS</span>
}

  </form>
  )
}
