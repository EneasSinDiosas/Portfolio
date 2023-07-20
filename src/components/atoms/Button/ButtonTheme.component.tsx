import { FC, ReactNode, useContext } from "react"
import { AppContext } from "../../../context/App.context";
import { LuMoonStar } from "react-icons/lu";
import { LuSun } from "react-icons/lu";

interface ButtonThemeProps{
    text?: string,
    children?: ReactNode,
    onClick?: () => void,
}
//
    
export const ButtonTheme: FC<ButtonThemeProps> = () =>{
    let style = 'py-2 px-4 rounded font-semibold transition duration-150 ease-in-out '
    const {toggleTheme, colorTheme} = useContext(AppContext);
    if(colorTheme === 'dark'){
        style = 'py-4 px-4 rounded-full text-green-200 bg-gradient-to-l from-teal-800 to-emerald-600 shadow-md hover:text-emerald-600 hover:bg-gradient-to-l hover:from-lime-300 hover:via-gren-300 hover:to-emerald-300 hover:scale-90 hover:shadow-md active:text-emerald-600 active:bg-gradient-to-l active:from-lime-300 active:via-gren-300 active:to-emerald-300 active:scale-90 active:shadow-md'
    } else {

        style ='py-4 px-4 rounded-full text-emerald-600 bg-gradient-to-l from-lime-300 via-gren-300 to-emerald-300 hover:text-green-200 hover:scale-90 hover:shadow-md hover:bg-gradient-to-l hover:from-teal-800 hover:to-emerald-600 active:text-green-200 active:scale-90 active:shadow-md active:bg-gradient-to-l active:from-teal-800 active:to-emerald-600'
    }
    return (
        <div className="mx-3 my-3">
            <button className={style} onClick={toggleTheme}>{colorTheme === 'dark' ? <LuSun/> : <LuMoonStar/>}</button>
        </div>
    )
}