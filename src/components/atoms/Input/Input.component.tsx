import { FC } from "react";

interface InputProps{
    text?: string,
    type?:string,
    value?: string,
    children?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string,
}

export const Input: FC<InputProps> = ({text, value, children, onChange, type, name}) =>{
    return (
        <>
        <div className="mt-3 ml-3">
            <div>
                <label className='p-3 text-basic font-semibold tracking-wide text-start text-teal-700 dark:text-green-200'>{text || children}</label><br></br>
            </div>
            <div className="text-center font-thin font-mono shadow-sm">
                <input type={type} onChange={onChange} name={name} value={value} required/>
            </div>
        </div>
        </>
        
    )
}