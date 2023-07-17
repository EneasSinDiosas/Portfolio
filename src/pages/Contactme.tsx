import { useNavigate } from 'react-router-dom';
import { Input } from '../components/atoms/Input/Input.component';
import { Button } from '../components/atoms/Button/Button.component';
import { Textarea } from '../components/atoms/Textarea/Textarea.component';
import { NavButton } from '../components/atoms/Button/NavButton.component';

export const Contactme = () => {
    
    const navigate = useNavigate();
    
    return(
        <div>
            <h1 className="text-green-200">Contact me </h1>
            <div>
                <Input>Nombre </Input>
                <Input>Correo electrónico </Input>
                <Textarea >Escribeme </Textarea>
                <Button>Envíar</Button>
                <NavButton text='Volver' className='py-2 px-4 rounded font-semibold transition duration-150 ease-in-out bg-green-600 shadow-lg hover:bg-emerald-700 hover:shadow-lg text-indigo-100' onClick={() => navigate('/')} />
            </div> 
        </div>
    )
}