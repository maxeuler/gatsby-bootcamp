import React from 'react';
import useSiteMetadata from './hooks/use-siteMetadata';
import footerStyles from './styles/footer.module.scss';

const Footer = () => {
  const { author } = useSiteMetadata();
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {author}, © 2019</p>
    </footer>
  );
};

export default Footer;
