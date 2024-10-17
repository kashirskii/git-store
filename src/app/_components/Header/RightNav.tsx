import { AccountIcon, CartIcon, SearchIcon } from "@icons"
import Link from "next/link"

const RightNav = () => {
    return (
        <nav className="header__rightNav">
            <ul>
                <li><Link href={""}><AccountIcon height={17}/></Link></li>
                <li><Link href={""}><SearchIcon height={17}/></Link></li>
                <li><Link href={""}><CartIcon height={17}/></Link></li>
            </ul>
        </nav>
    )
}

export { RightNav }