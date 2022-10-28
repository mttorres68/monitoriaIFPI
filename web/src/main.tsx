import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {Cadastro} from './pages/cadastro'
import { Login } from './pages/login'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>    
    
    <Cadastro />
  </React.StrictMode>
)
