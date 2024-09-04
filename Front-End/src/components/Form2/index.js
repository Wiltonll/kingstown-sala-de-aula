import "./Form.module.css"
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const Form2 = () => {
  return (
    <div className="container">
        <form>
             <h1>Acesse o sistema:</h1>
             <div> 
                <input type="text" placeholder= "Matricula"/>
                <AccountCircleIcon className= "icon" />
             </div>
             <div> 
                <input type="password" placeholder= "Senha"/>
                <LockIcon className="icon" />
            </div>
            <a href="#"> Esqueci a senha</a>
             <button>Entrar</button>
        </form>
      
    </div>
  )
}

export default Form2;
