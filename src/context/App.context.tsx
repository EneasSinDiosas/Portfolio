import { useEffect, useState } from 'react';
import { createContext } from "react";

export interface User {
    name: string;
    email: string;
    role: string;
    status: boolean;
    google: boolean;
    uid: string;
}

interface AppContextI {
    token: string,
    user: User | null,
    colorTheme: 'light' | 'dark',
    setToken: (value: string) => void,
    setUser: (value: User | null) => void,
    setColorTheme: (value: 'light' | 'dark') => void,
    toggleTheme: () => void;
}

export const AppContext = createContext({} as AppContextI);

export const Provider = ({ children }: any) => {
    const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
    const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || '{}'));
    const [colorTheme, setColorTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        localStorage.setItem('theme', colorTheme);
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    }, [colorTheme])
    
    const toggleTheme = () =>{
            colorTheme === 'light' ? setColorTheme('dark') : setColorTheme('light');
    }

    const values = {
        token,
        setToken,
        user,
        setUser,
        colorTheme,
        setColorTheme,
        toggleTheme,
    }

    return (<AppContext.Provider value={values}>{children}</AppContext.Provider>)

}

