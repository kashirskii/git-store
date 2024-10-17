import Link from "next/link";

const MiddleNav = () => {
  return (
    <nav className="header__middleNav">
      <ul>
        <li className="header__middleNav-sideMenu">
          <Link href={""}>Shop</Link>
        </li>
        <li>
          <Link href={""}>Soundbars</Link>
        </li>
        <li className="header__middleNav-sideMenu">
          <Link href={""}>Learn</Link>
        </li>
        <li>
          <Link href={""}>Support</Link>
        </li>
        <li>
          <Link href={""}>Radio</Link>
        </li>
        <li className="header__middleNav-sideMenu">
          <Link href={""}>Professional</Link>
        </li>
      </ul>
    </nav>
  );
};

export { MiddleNav };
