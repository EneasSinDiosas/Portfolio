import { useNavigate } from 'react-router-dom';
import { Button } from "../components/atoms/Button/Button.component";
import { Input } from "../components/atoms/Input/Input.component";
import { useForm } from "../hooks/useForm.hook";
import { NavButton } from '../components/atoms/Button/NavButton.component';
import { CardLayout } from '../components/atoms/CardWeather/CardLayout.component';
import { FormEvent } from 'react';
import { User } from './Login.page';


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
    <div className='flex w-screen h-screen justify-center items-center bg-gradient-to-b from-emerald-600 to-teal-950 '>
      <CardLayout>
        <h1 className='text-2xl font-extrabold tracking-widest text-center text-green-200'>Registro</h1>
        <Input type="text" value={formData.name} name='name' onChange={onChange}>Nombre</Input>
        <Input type="email" value={formData.email} name='email' onChange={onChange}>Correo</Input>
        <Input type="password" value={formData.password} name='password' onChange={onChange}>Password</Input>
        <p className='text-green-200 text-sm italic'>Debe tener al menos 6 caracteres</p>
        <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
          <Button text='Registrarse' onClick={onSubmit}></Button>
          <Button text='Borrar' variant='outlined' onClick={resetForm}></Button>
        </div>
        <div>
          <p className='text-green-200'>¿Ya está registrado?</p>
          <NavButton text='Login' className='text-teal-300 hover:text-green-200 hover:underline' onClick={() => navigate('/login')}></NavButton>
        </div>
        <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
          <NavButton text='Volver' className='py-2 px-4 rounded font-semibold transition duration-150 ease-in-out bg-green-600 shadow-lg hover:bg-emerald-700 hover:shadow-lg text-indigo-100 hover:scale-90' onClick={() => navigate('/')} />
        </div>
      </CardLayout>
    </div>
  )
}
