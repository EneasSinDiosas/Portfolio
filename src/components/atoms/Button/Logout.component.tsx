import { FC, ReactNode, useContext } from 'react';
import { AppContext } from '../../../context/App.context';
import { useNavigate } from 'react-router-dom';

interface LogoutProps{
    text?: string,
    children?: ReactNode,
}

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


export const Logout: FC<LogoutProps> = ({text, children}) =>{
    let style = 'py-2 px-4 rounded font-semibold transition duration-150 ease-in-out bg-violet-600 shadow-lg hover:bg-indigo-600 hover:shadow-lg text-indigo-100 hover:scale-90'
    const {setUser, setToken} = useContext(AppContext);
    const navigate = useNavigate();
   
    const onClick= () =>{
        setUser(null);
        setToken('');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
      }
    return (
        <div className="mx-3 my-3">
            <button className={style} onClick={onClick}>{text || children}</button>
        </div>
    )
}