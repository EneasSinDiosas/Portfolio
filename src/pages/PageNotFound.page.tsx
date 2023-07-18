import { useNavigate } from 'react-router-dom';
import { NavButton } from '../components/atoms/Button/NavButton.component';

export const PageNotFound = () => {
    const navigate = useNavigate();
    
    return(
        <div>

            <h1 className="text-5xl font-extrabold tracking-wider">Error 404 </h1>
            <h2 className="text-3xl">Page not found</h2>
            <NavButton text='Volver' className='text-green-950' onClick={() => navigate('/')} />
        </div>
    )
}