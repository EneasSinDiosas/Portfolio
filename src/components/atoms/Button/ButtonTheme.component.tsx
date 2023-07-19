import { FC, ReactNode, useContext } from "react"
import { AppContext } from "../../../context/App.context";

interface ButtonThemeProps{
    text?: string,
    children?: ReactNode,
    onClick?: () => void,
}
//
    
export const ButtonTheme: FC<ButtonThemeProps> = ({text}) =>{
    let style = 'py-2 px-4 rounded font-semibold transition duration-150 ease-in-out '
    const {toggleTheme, colorTheme} = useContext(AppContext);
    if(colorTheme === 'dark'){
        text = 'Light'
        style = 'py-6 px-10 rounded-full text-green-200 bg-gradient-to-l from-teal-800 to-emerald-600 shadow-md hover:text-emerald-600 hover:bg-gradient-to-l hover:from-lime-300 hover:via-gren-300 hover:to-emerald-300 hover:scale-90 hover:shadow-md '
    } else {
        text='Dark'
        style ='py-6 px-10 rounded-full text-emerald-600 bg-gradient-to-l from-lime-300 via-gren-300 to-emerald-300 hover:text-green-200 hover:scale-90 hover:shadow-md hover:bg-gradient-to-l hover:from-teal-800 hover:to-emerald-600'
    }
    return (
        <div className="mx-3 my-3">
            <button className={style} onClick={toggleTheme}>{text}</button>
        </div>
    )
}