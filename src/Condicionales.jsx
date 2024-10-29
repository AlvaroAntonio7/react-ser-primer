import { useState } from "react"
import AgregarTarea from "./components/AgregarTarea"

const Items = ({nombre, visto})=>{
    return(
        <li>{nombre}
        {visto?"done":"todavia"}</li> //para solo una opcion visto&& "done"
    )
}

const Condicionales = () => {

    const addTask = ()=>{
        //arreglo.push({nombre:"nuevo", visto: false}) //este es incorrecto porqu push no se usa para actualizar el estado
        setarreglo([...arreglo, {nombre:"nuevo", visto: false}]) //spread operator
    }

    let listadosecciones = [
        {id: 1, nombre: "Instalaciones", visto:true},
        {id: 2, nombre:"Uso de vite", visto:true},
        {id: 3, nombre:"componentes", visto:true},
        {id: 4, nombre:"variables jsx", visto:true},
        {id: 5, nombre:"props", visto:false},
        {id: 6, nombre:"eventos", visto:false},
        {id: 7, nombre:"UseState", visto:false}
    ]

    const [arreglo, setarreglo] = useState(listadosecciones)

    const onAgregarTarea = (val) =>{
      if(val<1)return

      const envio = {
        id: arreglo.length+1,
        nombre:val,
        visto: false
      }
      setarreglo([...arreglo, envio])
    }
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea> {/*en este caso se podria pasar agregarTarea={setarreglo} el padre le pasa al hijo un metodo para modificar al padre pero no es lo mas correcto*/}
      <ol>
        {/*
        //asi seria para pasar uno por uno sin el arreglo

        <Items nombre="Instalaciones" visto={true}></Items>
        <Items nombre="Uso de vite" visto={true}></Items>
        <Items nombre="componentes" visto={true}></Items>
        <Items nombre="variables jsx" visto={true}></Items>
        <Items nombre="props" visto={false}></Items>
        <Items nombre="eventos" visto={false}></Items>
        <Items nombre="UseState" visto={false}></Items>
        */}

        {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)} {/*la idea es q el key sea unico*/}
        
      </ol>
        
    {/*  <button onClick={()=>addTask()}>Agtegar tarea</button>*/}
    </>
  )
}

export default Condicionales
