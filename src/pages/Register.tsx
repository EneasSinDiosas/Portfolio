import { useNavigate } from 'react-router-dom';
import { Button } from "../components/atoms/Button/Button.component";
import { Input } from "../components/atoms/Input/Input.component";
import { useForm } from "../hooks/useForm.hook";
import { NavButton } from '../components/atoms/Button/NavButton.component';

interface FormRegistro{
  name: string,
  surName: string,
  mail: string,
  password: string,
  repeatPassword: string,
}

const initialFormState: FormRegistro ={name: '', surName: '', mail: '', password: '', repeatPassword: ''}

export const Register = () =>{
  //COMPONENTES
  const {onChange, resetForm, formData} = useForm<FormRegistro>(initialFormState);
  const navigate = useNavigate();

  return (
    <main className='flex w-screen h-screen justify-center items-center bg-white'>
      <div className="px-4 py-4 flex-col w-5/6 bg-indigo-300 shadow-2xl">
        <h1 className='text-2xl font-extrabold tracking-widest text-center'>Registro</h1>
          <Input type="text" value={formData.name} name='name' onChange={onChange}>Nombre</Input>
          <Input type="text" value={formData.surName} name='surName' onChange={onChange}>Apellidos</Input>
          <Input type="email" value={formData.mail} name='mail' onChange={onChange}>Correo</Input>
          <Input type="password" value={formData.password} name='password' onChange={onChange}>Password</Input>
          <Input type="password" value={formData.repeatPassword} name='repeatPassword' onChange={(onChange)}>Repeat password</Input>
          <div className='flex flex-row w-full mt-3 gap-2'>
            <Button text='Registrarse'></Button> 
            <Button text='Borrar' variant='outlined' onClick={resetForm}></Button>
            <NavButton text='Volver' className='py-2 px-4 rounded font-semibold transition duration-150 ease-in-out bg-green-600 shadow-lg hover:bg-emerald-700 hover:shadow-lg text-indigo-100' onClick={() => navigate('/')} />
          </div>
      </div>
    </main>
  )
}
