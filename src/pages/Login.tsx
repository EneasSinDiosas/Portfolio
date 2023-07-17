//cntrl mayus p + para crear la interfaz de datos de un json
// LogIn
// url: https://noderestserver-production-241a.up.railway.app/api/v1/auth/login

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '../components/atoms/Input/Input.component';
import { Button } from '../components/atoms/Button/Button.component';
import { NavButton } from '../components/atoms/Button/NavButton.component';



export interface LoginPost {
  user:  User;
  token: string;
}

export interface User {
  name:   string;
  email:  string;
  role:   string;
  status: boolean;
  google: boolean;
  uid:    string;
}


interface FormLogIn{
  email: string,
  password: string
}

const initialFormState: FormLogIn ={email: '', password: ''}

export const Login = () => {
  const [{email, password}, setFormState] = useState<FormLogIn>(initialFormState);
  const navigate = useNavigate();

  const requestLog = () =>{
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({email, password}),
    };
    
  
    fetch("https://noderestserver-production-241a.up.railway.app/api/v1/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  return (
    <div className='flex w-screen h-screen justify-center items-center bg-emerald-100'>
      <div className="px-4 py-4 flex-col w-5/6 shadow-2xl bg-emerald-400">
        <h1 className='text-2xl font-extrabold tracking-widest text-center'>Registro</h1>
          <Input type="email" value={email} onChange={({target}) => setFormState((prev) => ({...prev, email: target.value}))}>Correo</Input>
          <Input type="password" value={password} onChange={({target}) => setFormState((prev) => ({...prev, password: target.value}))}>Password</Input>
          <div className='flex flex-row w-full mt-3 gap-2'>
            <Button text='LogIn' onClick={requestLog}></Button>
            <NavButton text='Volver' className='py-2 px-4 rounded font-semibold transition duration-150 ease-in-out bg-green-600 shadow-lg hover:bg-emerald-700 hover:shadow-lg text-indigo-100' onClick={() => navigate('/')} /> 
          </div>
          
      </div>
    </div>
  )
}
