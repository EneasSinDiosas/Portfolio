
import { FC, ReactNode } from "react"

interface TextareaProps {
    text?: string
    children?: ReactNode,
    name?: string

}


export const Textarea: FC<TextareaProps> = ({text, name, children}) => {
    return (
        <div className=" flex flex-col mt-3 ml-3 justify-center">
        <label className="p-3 text-basic font-semibold tracking-wide text-start text-teal-700 dark:text-green-200">{text || children}</label>
        <textarea id={text} name={name} className="p-3 w-11/12 border-2 rounded outline-1 font-mono text-basic font-semibold tracking-wide text-start text-stone-900 shadow-md ml-3 mb-2"></textarea>
        </div>
    )
}