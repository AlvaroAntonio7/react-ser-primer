import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimerComponente from './PrimerComponente'
import Eventos from './Eventos'
import Condicionales from './Condicionales'
import UsersApp from './components/UsersApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente/>
    <Eventos value={0}/>
    <Condicionales/>
    <UsersApp/>
  </React.StrictMode>,
)
