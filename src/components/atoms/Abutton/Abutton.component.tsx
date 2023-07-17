import { FC } from "react"

interface AbuttonProps {
    href?: string,
    src?: string,
    target?: '_blank' | '_self'
}

export const Abutton: FC<AbuttonProps> = ({ href, src, target = '_blank'}) => {
    return (
        <a href={href} rel="" target={target}>
            <img src={src} rel="" />
        </a>
    )
}