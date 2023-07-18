import React from "react";
import { useState } from 'react';

export interface User {
    name:   string;
    email:  string;
    role:   string;
    status: boolean;
    google: boolean;
    uid:    string;
  }

interface AppContextI {
    token: string,
    user: User | null,
    setToken: (value: string) => void,
    setUser: (value: User) => void,
}

export const AppContext = React.createContext({} as AppContextI);

export const Provider = ({children}: any) => {
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<User | null>(null);

    const values = {
        token,
        setToken,
        user,
        setUser,
    }

    return (<AppContext.Provider value={values}>{children}</AppContext.Provider>)
    
}

