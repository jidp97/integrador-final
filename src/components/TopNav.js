import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";



function TopNav({ isFixedTop, showLinks = true}) {
  const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = [
    "navbar",
    "navbar-expand-lg",
    "navbar-light",
    isFixedTop ? "fixed-top" : "",
    isScrolled ? "scrolled shadow-sm" : "",
  ].join(" ");

  const mainLinkClasses = [
      "ms-1",
      "fw-bolder",
    ].join(" ");

  const linkClasses = [
    "collapse",
    "navbar-collapse",
    showLinks ? "" : "justify-content-end",
  ].join(" ");

  return (
    <nav
      id="navScroll"
      className={navClasses}
      tabIndex={0}
    >
      <div className="container">
        <Link className="navbar-brand pe-4 fs-4" to="/">
          <img src="logo512.png" alt="DeCa" width="50" />
          <span className={mainLinkClasses}>DeCa App</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={linkClasses} id="navbarSupportedContent">
          {showLinks &&
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink goTo="/registrar" name="Regístrate" ariaLabel="Regístrate" />
            <NavLink goTo="#login" name="Inicia sesión" ariaLabel="Inicia sesión" />    
          </ul>}
        </div>
      </div>
    </nav>
  );
}
export default TopNav;