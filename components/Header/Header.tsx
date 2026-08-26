import Link from "next/link";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerInner}>
        <Link href="/" aria-label="NoteHub home" className={css.logo}>
          NoteHub
        </Link>

        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/notes/filter/all">Notes</Link>
            </li>

            <AuthNavigation />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
