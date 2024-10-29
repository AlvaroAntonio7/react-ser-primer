import { useState } from "react"

{/*
//se puede declarar de esta forma pero en este caso por el tema del scope del value es mejor declararlo adentro

const Button = () =>{
    return(
        <button onClick={handleClick}> // se puede invocar de esta forma event=>handleClick(event) pero en este caso como es lo unico que se esta pasndo como argumento se usa este metodo handleClick 
      
        Soy un boton
      </button>
    )
}

*/
}




const Eventos = ({value}) => {

    const[contador, setContador] = useState(value) /*esto es un hook*/
    //constante, metodoparaactualizar = useState(valorpordefecto)

    function handleClick(){
        //    console.log(event)
           // value+=1
            //console.log(value)

            setContador(contador+1) //asi se actualiza un estado
        }

  return (
    <>
      <h1>Contador:</h1>
      <p>{contador}</p>
      <button onClick={handleClick}>
        Incrementar
      </button>
    </>
  )
}

export default Eventos
