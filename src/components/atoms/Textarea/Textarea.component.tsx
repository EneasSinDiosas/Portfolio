
import { FC, ReactNode } from "react"

interface TextareaProps {
    text?: string
    children?: ReactNode,
    id?: string
}


export const Textarea: FC<TextareaProps> = ({text, id, children}) => {
    return (
        <>
        <label className="p-3 font-mono text-basic font-semibold tracking-wide text-start text-stone-900 ml-3">{text || children}</label>
        <textarea name={text} id={id} className="p-3 w-9/12 border-2 rounded outline-1 font-mono text-basic font-semibold tracking-wide text-start text-stone-900 shadow-md ml-3 mb-2"></textarea>
        </>
    )
}