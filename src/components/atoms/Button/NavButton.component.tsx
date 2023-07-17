import { FC, ReactNode } from "react"

interface NavButtonProps{
    text?: string,
    children?: ReactNode,
    onClick?: () => void,
    className?: string
}
    // al igualar una de las opciones esta se crea una opción por defecto, en este caso la opción por defecto es variant=filled.
export const NavButton: FC<NavButtonProps> = ({text, children, onClick, className}) =>{

    return (
        <div className="mx-3 my-3">
            <button onClick={onClick} className={className}>{text || children}</button>
        </div>
    )
}