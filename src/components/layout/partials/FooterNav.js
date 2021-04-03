import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">Teams</Link>
        </li>
        <li>
          <Link to="#0"><a href={`mailto:support@pointblank.club`} target="_blank">Support</a></Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
