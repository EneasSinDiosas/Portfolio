import { FC, ReactNode } from "react"

interface ButtonThemeProps{
    text?: string,
    children?: ReactNode,
    onClick?: () => void,

}
    // al igualar una de las opciones esta se crea una opción por defecto, en este caso la opción por defecto es variant=filled.
export const ButtonTheme: FC<ButtonThemeProps> = ({text, children, onClick}) =>{
    let style = 'py-2 px-4 rounded font-semibold transition duration-150 ease-in-out '

    return (
        <div className="mx-3 my-3">
            <button className={style} onClick={onClick}>{text || children}</button>
        </div>
    )
}