import { FC, ReactNode } from "react"

interface ButtonProps{
    text?: string,
    children?: ReactNode,
    onClick?: () => void,
    variant?: 'filled'|'outlined',
}
    // al igualar una de las opciones esta se crea una opción por defecto, en este caso la opción por defecto es variant=filled.
export const Button: FC<ButtonProps> = ({text, variant = 'filled', children, onClick}) =>{
    let style = 'py-2 px-4 rounded font-semibold transition duration-150 ease-in-out '
    if(variant === 'filled'){
        style = `${style}  bg-green-600 shadow-lg hover:bg-teal-800 hover:shadow-lg text-indigo-100 hover:scale-90`
    } else {
        style = `${style} bg-red-500 shadow-md hover:bg-red-800 text-teal-100 hover:shadow-inner hover:text-white hover:scale-90`
    }

    return (
        <div className="mx-3 my-3">
            <button className={style} onClick={onClick}>{text || children}</button>
        </div>
    )
}