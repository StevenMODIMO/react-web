import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillProject, AiFillContacts } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from 'react-icons/fa'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const showLinks = () => setShow(!show)
    const closeMobile = () => setShow(false)
    let activeStyle = {
      textDecoration: "underline",
    };
  return (
    <nav>
      <div className="header">
        <div onClick={showLinks}>
          {show ? <FaTimes /> : <GiHamburgerMenu />}
        </div>
        <NavLink to='/' onClick={closeMobile}>RRN</NavLink>
      </div>
      <div className={show ? "nav-container active" : "nav-container"}>
        <div className="nav-links">
        <div><ImInfo /></div>
          <NavLink to="/about" onClick={closeMobile} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            About
          </NavLink>
        </div>
        <div className="nav-links">
        <div><AiFillProject /></div>
          <NavLink to="/projects" onClick={closeMobile} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Projects
          </NavLink>
        </div>
        <div className="nav-links">
        <div><AiFillContacts /></div>
          <NavLink to="/contact" onClick={closeMobile} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Contacts
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
