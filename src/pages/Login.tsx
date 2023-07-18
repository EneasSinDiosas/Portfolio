//cntrl mayus p + para crear la interfaz de datos de un json
// LogIn
// url: https://noderestserver-production-241a.up.railway.app/api/v1/auth/login

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '../components/atoms/Input/Input.component';
import { Button } from '../components/atoms/Button/Button.component';
import { NavButton } from '../components/atoms/Button/NavButton.component';
import { CardLayout } from '../components/atoms/CardWeather/CardLayout.component';



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
    <div className='flex w-screen h-screen justify-center items-center bg-gradient-to-b from-emerald-600 to-teal-950 '>
      <CardLayout>
      <h1 className='text-2xl font-extrabold tracking-widest text-center text-green-200 font-serif'>Login</h1>
          <Input type="email" value={email} onChange={({target}) => setFormState((prev) => ({...prev, email: target.value}))}>Correo</Input>
          <Input type="password" value={password} onChange={({target}) => setFormState((prev) => ({...prev, password: target.value}))}>Password</Input>
          <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
            <Button text='LogIn' onClick={requestLog}></Button>
          </div>
          <div>
            <p className='text-green-200'>¿Aún no está registrado?</p>
            <NavButton text='Regístrese aquí' className='text-teal-300 hover:text-green-200 hover:underline' onClick={() => navigate('/register')}></NavButton>
          </div>
          <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
          <NavButton text='Volver' className='py-2 px-4 rounded font-semibold transition duration-150 ease-in-out bg-green-600 shadow-lg hover:bg-emerald-700 hover:shadow-lg text-indigo-100' onClick={() => navigate('/')} /> 
          </div>
      </CardLayout>
    </div>
  )
}
