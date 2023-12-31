//cntrl mayus p + para crear la interfaz de datos de un json
// LogIn
// url: https://noderestserver-production-241a.up.railway.app/api/v1/auth/login

import { useNavigate } from 'react-router-dom';
import { FormEvent, useContext} from 'react';
import { Input } from '../components/atoms/Input/Input.component';
import { Button } from '../components/atoms/Button/Button.component';
import { NavButton } from '../components/atoms/Button/NavButton.component';
import { CardLayout } from '../components/atoms/CardWeather/CardLayout.component';
import { useForm } from '../hooks/useForm.hook';
import { AppContext } from '../context/App.context';
import { HomeButton } from '../components/atoms/Button/HomeButton.component';
import { WeatherButton } from '../components/atoms/Button/WeatherButton.component'


export interface LoginResponse {
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
  const {setUser, setToken} = useContext(AppContext);
  const {onChange, formData} = useForm<FormLogIn>(initialFormState);
  const navigate = useNavigate();
  
  const onSubmit = async (e?: FormEvent) =>{
    e?.preventDefault();
    try {
      const response = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/auth/login', {
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json; chatset=UTF-8',
        },
        body: JSON.stringify(formData),
      });
      const data: LoginResponse = await response.json();
      if(!!data.token){
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        navigate('/weather5days')
      }
    } catch (error){
      
    }
  }

  return (
    <div className='w-screen h-screen overflow-y-auto items-center justify-center flex flex-col bg-gradient-to-b from-lime-100 to-green-200 dark:bg-gradient-to-b dark:from-emerald-800  dark:to-teal-950'>
      <CardLayout>
      <h1 className='text-2xl font-extrabold tracking-widest text-center font-serif text-teal-800 dark:text-green-200 '>Sign in</h1>
          <Input type="email" name='email' value={formData.email} onChange={onChange}>Correo</Input>
          <Input type="password" name='password' value={formData.password} onChange={onChange}>Password</Input>
          <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
            <Button text='LogIn' onClick={onSubmit}></Button>
          </div>
          <div>
            <p className='text-teal-800 dark:text-green-200'>¿Aún no está registrado?</p>
            <NavButton text='Sign up' className='text-cyan-600 font-semibold hover:underline hover:text-emerald-700 dark:text-teal-300 dark:hover:text-green-200 ' onClick={() => navigate('/register')}></NavButton>
          </div>
          <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
          <WeatherButton className='py-2 px-2 rounded font-semibold transition duration-150 ease-in-out bg-green-600 shadow-lg hover:bg-emerald-700 hover:shadow-lg text-indigo-100 hover:scale-90'/>
          <HomeButton/>
          </div>
      </CardLayout>
    </div>
  )
}
