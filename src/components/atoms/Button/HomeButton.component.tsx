import { FC, ReactNode } from "react"
import { ImHome } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

interface HomeButtonProps{

    children?: ReactNode,
    onClick?: () => void,
    className?: string
}
    // al igualar una de las opciones esta se crea una opción por defecto, en este caso la opción por defecto es variant=filled.
export const HomeButton: FC<HomeButtonProps> = () =>{
    const navigate = useNavigate();
    return (
        <div className="mx-3 my-3">
            <button onClick={() => navigate('/')} className='py-2 px-2 rounded font-semibold transition duration-150 ease-in-out bg-green-600 shadow-lg hover:bg-emerald-700 hover:shadow-lg text-indigo-100 hover:scale-90'>
                <ImHome className='h-6 w-6'/>
            </button>
        </div>
    )
}