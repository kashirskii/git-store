import { RightNav } from "./RightNav"
import { MiddleNav } from "./MiddleNav"
import './Header.scss'
import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <nav className="header__leftNav"><Link href={""}>GIT STORE</Link></nav>
            <MiddleNav/>
            <RightNav/>
        </header>
    )
}

export { Header } 