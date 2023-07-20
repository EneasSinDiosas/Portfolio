import { FC } from "react"
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

interface WeatherButtonProps{
    onClick?: () => void,
    className?: string
}
    // al igualar una de las opciones esta se crea una opción por defecto, en este caso la opción por defecto es variant=filled.
export const WeatherButton: FC<WeatherButtonProps> = ({className}) =>{
    const navigate = useNavigate();
    return (
        <div className="mx-3 my-3">
            <button onClick={() => navigate('/weather5days')} className={className}>
                <LiaCloudSunRainSolid className='h-6 w-6'/>
            </button>
        </div>
    )
}