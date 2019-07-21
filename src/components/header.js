import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from './hooks/use-siteMetadata';
import styledHeader from './styles/header.module.scss';

const Header = () => {
  const { title } = useSiteMetadata();

  return (
    <header className={styledHeader.header}>
      <h1>
        <Link to="/" className={styledHeader.title}>
          {title}
        </Link>
      </h1>
      <ul className={styledHeader.nav_list}>
        <li>
          <Link
            className={styledHeader.nav_item}
            activeClassName={styledHeader.active_nav_item}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styledHeader.nav_item}
            activeClassName={styledHeader.active_nav_item}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={styledHeader.nav_item}
            activeClassName={styledHeader.active_nav_item}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={styledHeader.nav_item}
            activeClassName={styledHeader.active_nav_item}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
