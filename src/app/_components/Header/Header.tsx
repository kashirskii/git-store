import { RightNav } from "./RightNav"
import './Header.scss'
import Link from "next/link"
import { gql } from "@/graphql/client";
import { MiddleNav } from "./MiddleNav";

const Header = async() => {
    const { header } = await gql.getHeader()

    return (
        <header className="header">
            <nav className="header__leftNav"><Link href={""}>SONOS</Link></nav>
            <MiddleNav links={header.middle_nav.Link}/>
            <RightNav/>
        </header>
    )
}

export { Header } 