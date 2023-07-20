import { FC, ReactNode } from "react"
import { useNavigate } from 'react-router-dom';
import { MdAssignmentInd } from "react-icons/md";
interface ButtonLoginProps{

    children?: ReactNode,
    onClick?: () => void,
    className?: string
}
    // al igualar una de las opciones esta se crea una opción por defecto, en este caso la opción por defecto es variant=filled.
export const ButtonLogin: FC<ButtonLoginProps> = () =>{
    const navigate = useNavigate();
    return (
        
        <div className='justify-start flex flex-row items-center h-60'>
            <button onClick={() => navigate('/')} className='hover:scale-95 lg:w-12 lg:h-12'>
                <MdAssignmentInd></MdAssignmentInd>
            </button>
        </div>
            
        
    )
}