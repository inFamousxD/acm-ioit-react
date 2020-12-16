import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import acmLogo from '../../../assets/acm.png'


const Navbar = (props) => {

    const [show, handleShow] = useState(false);

    const [click, setClick] = useState();

    const clickHandler = () => {
        setClick(!click);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <nav className={`nav ${show && "nav_black"}`}>
      <div className="nav_center container">
        <img
        className="logo"
        src={acmLogo}
        alt="ACM Logo"
      />

        <ul className={click ? "nav_list active" : "nav_list"}>
          {MenuItems.map(({ id, title, cName }) => (
            <li key={id} className="nav_item">
              <Link className={cName}>{title}</Link>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={clickHandler}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
    )
}

export default Navbar
