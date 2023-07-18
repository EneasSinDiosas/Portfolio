import {FC} from "react";

interface CardLayoutProps{
    children?: JSX.Element | JSX.Element[]
}

export const CardLayout: FC<CardLayoutProps> = ({children}) =>{

    return (
            <div className=' flex px-4 py-4 flex-col justify-center items-center rounded-3xl w-5/6 shadow-xl bg-teal-500 bg-opacity-60'>
                {children}
            </div>
    )
}