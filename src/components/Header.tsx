import classnames from 'classnames';
import React, { useCallback, useState } from 'react';

const Hamburguer = ({
  onClick,
  isActive,
}: {
  onClick: () => void;
  isActive: boolean;
}) => {
  const onClickCallback = useCallback(() => onClick(), [onClick]);

  return (
    <a
      aria-expanded="false"
      aria-label="menu"
      className={classnames(['navbar-burger', { 'is-active': isActive }])}
      onClick={onClickCallback}
      role="button"
      tabIndex={0}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );
};

const LinkWraper: React.FC<{ isActive: boolean }> = ({
  children,
  isActive,
}) => (
  <div className={classnames(['navbar-menu', { 'is-active': isActive }])}>
    <div className="navbar-start">{children}</div>
  </div>
);

const Link = ({ label, link }: { label: string; link: string }) => (
  <a className="navbar-item" href={link}>
    {label}
  </a>
);

export const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <nav
      aria-label="main navigation"
      className="navbar is-fixed-top"
      role="navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Bike-Reporter
        </a>
        <Hamburguer
          isActive={isActiveMenu}
          onClick={() => setIsActiveMenu(!isActiveMenu)}
        />
      </div>
      <LinkWraper isActive={isActiveMenu}>
        <Link label="Home" link="/" />
        <Link label="About us" link="/about" />
        <Link label="My reports" link="/my-reports" />
      </LinkWraper>
    </nav>
  );
};
