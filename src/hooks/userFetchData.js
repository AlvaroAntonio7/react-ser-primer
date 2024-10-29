//Es siplementee .js xq no se usa jsx
//se puede hacer un custom hook o helpers para ayudar al codigo, en este caso custom Hooks

import { useState, useEffect } from "react"



const userFetchData = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  
  const fetchUsers = async() =>{
    try{
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        const data =  await response.json()
        setUsers(data)
        setIsLoading(false)
    }catch(error){
        console.log(error)
    }
  }

  //useEffect se usa para que solo lllame una vez al  componente y no genere un bucle
  //en este caso llamaria 2 veces por el strictmode que hace una revision que todo este bien, pero en produccion ya solo lo llama una vez
    useEffect(()=>{fetchUsers()}, []) //si se usaria para actualizar distintas cosas, se especificarian en []

    //En caso de querer llamar a la API presionando un botton se usa este metodo y el useEffect ya no es necesario (comentar)
   //const handleFetch =()=>{     fetchUsers()    }


  return (
   users,
   isLoading
  )
}

export default userFetchData
