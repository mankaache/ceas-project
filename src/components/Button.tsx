import Link from "next/link"



interface ButtonProps{
    href: string,
    text: string,
}
const Button = ({href,text}:ButtonProps) => {
    return (
        <Link className={'bg-secondary hover:bg-primary transition-all px-8 py-3 rounded-lg text-white'} href={href}>{text}</Link>
    )
}

export default Button