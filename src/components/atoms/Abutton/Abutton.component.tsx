import { FC, ReactNode } from "react"

interface AbuttonProps {
    text?: string,
    children?: ReactNode,
    href?: string,
    src?: string,
    target?: '_blank' | '_self'
}

export const Abutton: FC<AbuttonProps> = ({ href, src, target = '_blank', text, children}) => {
    return (
        <a href={href} rel="" target={target}>
            {text || children}
            <img src={src} rel=""  className="hover:scale-95 content-center"/>
        </a>
    )
}