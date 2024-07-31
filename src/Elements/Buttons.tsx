import { Link } from "react-router-dom"

export const PackagingButtons: React.FC<PropsPackagingButtons> = ({ to, className, text }) => {
    return (
        <Link to={to}><button className={className}>{text}</button></Link>
    )
}

