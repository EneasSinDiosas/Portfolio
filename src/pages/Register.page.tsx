import { useNavigate } from 'react-router-dom';
import { Button } from "../components/atoms/Button/Button.component";
import { Input } from "../components/atoms/Input/Input.component";
import { useForm } from "../hooks/useForm.hook";
import { NavButton } from '../components/atoms/Button/NavButton.component';
import { CardLayout } from '../components/atoms/CardWeather/CardLayout.component';
import { FormEvent } from 'react';
import { User } from './Login.page';
import { HomeButton } from '../components/atoms/Button/HomeButton.component';


export interface RegisterForm {
  name: string;
  email: string;
  role: string;
  password: string;
}

const initialFormState: RegisterForm = { name: '', email: '', password: '', role: 'ADMIN_ROLE' }

export const Register = () => {
  //COMPONENTES
  const { onChange, resetForm, formData } = useForm<RegisterForm>(initialFormState);
  const navigate = useNavigate();

  const onSubmit = async (e?: FormEvent) =>{
    e?.preventDefault();
    try {
      const response = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/users/', {
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json; chatset=UTF-8',
        },
        body: JSON.stringify(formData),
      });
      const data: User = await response.json();
      if(!!data.uid){
        navigate('/login')
      }
    } catch (error){
    
    }
  }

  return (
    <div className='w-screen h-screen overflow-y-auto items-center justify-center flex flex-col bg-gradient-to-b from-lime-100 to-green-200 dark:bg-gradient-to-b dark:from-emerald-800  dark:to-teal-950'>
      <CardLayout>
        <h1 className='text-2xl font-extrabold tracking-widest text-center text-teal-800 dark:text-green-200'>Sing up</h1>
        <Input type="text" value={formData.name} name='name' onChange={onChange}>Nombre</Input>
        <Input type="email" value={formData.email} name='email' onChange={onChange}>Correo</Input>
        <Input type="password" value={formData.password} name='password' onChange={onChange}>Password</Input>
        <p className='text-green-200 text-sm italic'>Debe tener al menos 6 caracteres</p>
        <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
          <Button text='Registrarse' onClick={onSubmit}></Button>
          <Button text='Borrar' variant='outlined' onClick={resetForm}></Button>
        </div>
        <div>
          <p className='text-teal-800 dark:text-green-200'>¿Ya está registrado?</p>
          <NavButton text='Sign in' className='text-cyan-600 font-semibold hover:text-emerald-700 dark:text-teal-300 dark:hover:text-green-200 hover:underline' onClick={() => navigate('/login')}></NavButton>
        </div>
        <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
          <HomeButton/>
        </div>
      </CardLayout>
    </div>
  )
}
