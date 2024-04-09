import React from 'react';

function NavLink(props) {
 
 const className = "nav-link";
 
  return ( 
    <li className="nav-item">
          <a className={className} href={props.goTo} aria-label={props.ariaLabel}>
            {props.name}
          </a>
    </li>
  );
}

export default NavLink;