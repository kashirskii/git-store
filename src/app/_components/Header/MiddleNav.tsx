import Link from "next/link";
import { MiddleNav as MiddleNavType, ComponentUiLink } from "@/graphql/__generate__";

interface MiddleNavProps {
  links: ReadonlyArray<ComponentUiLink>;
}

const MiddleNav = async({ links }: MiddleNavProps) => {
  return (
    <nav className="header__middleNav">
      <ul>
        {links.map((link) => {
          return (
            <li className="header__middleNav-sideMenu" key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { MiddleNav };
