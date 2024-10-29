import { useState } from "react"


const AgregarTarea = ({agregarTarea}) => {

    const [inputValue, setInputValue] = useState("")
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }
    function onSubmit(event){
        event.preventDefault()
        {/*Esto se usaria en caso de que nos pasen el metodo para modificar el estado, pero comono es la mejor practica
        const envio = {
            nombre: inputValue,
            visto : false
        }
       
        agregarTarea(tareas => [...tareas, envio])
        */}
        agregarTarea(inputValue)
    }
  return (
  <form onSubmit={onSubmit}>
    <input
    type="text"
    placeholder="Ingresa nueva tarea"
    value={inputValue}
    onChange={onInputChange} /*EN ESTE CASO ES IUAL QUE USAR (e) =>{setInputValue(e.target.value)}*/
  />
  </form>
  )
}

export default AgregarTarea
