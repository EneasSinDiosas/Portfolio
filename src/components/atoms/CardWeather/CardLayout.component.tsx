import {FC} from "react";

interface CardLayoutProps{
    children?: JSX.Element | JSX.Element[]
}

export const CardLayout: FC<CardLayoutProps> = ({children}) =>{

    return (
            <div className=' flex px-4 py-4 flex-col justify-center items-center rounded-3xl w-5/6 shadow-lg bg-green-600 bg-opacity-5 dark:bg-teal-50 dark:bg-opacity-10 dark:shadow-2xl'>
                {children}
            </div>
    )
}