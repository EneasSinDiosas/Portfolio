import { FC, ReactNode, useContext } from "react"
import { AppContext } from "../../../context/App.context";

interface ButtonThemeProps{
    text?: string,
    children?: ReactNode,
    onClick?: () => void,
}
    // al igualar una de las opciones esta se crea una opción por defecto, en este caso la opción por defecto es variant=filled.
export const ButtonTheme: FC<ButtonThemeProps> = ({text, children}) =>{
    let style = 'py-2 px-4 rounded font-semibold transition duration-150 ease-in-out '
    const {toggleTheme} = useContext(AppContext);
    
    return (
        <div className="mx-3 my-3">
            <button className={style} onClick={toggleTheme}>{text || children}</button>
        </div>
    )
}