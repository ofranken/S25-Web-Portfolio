import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import "../styles/main.css";
import logo from "../images/Portfolio Initials Logo - White.png";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <>
        <header className="gradient-background">
            <img src={logo} height="150px"></img>
            <nav ref={navRef}>
                <a href="/#">About</a>
                <a href="/#">Skills</a>
                <a href="/#">Project</a>
                <a href="/#">Contact</a>
                <a href="/#">Resumé</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick= 
            {showNavbar}>
                <FaBars />
            </button>
        </header>
        </>
        
    );
}

export default Navbar;