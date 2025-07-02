import {FaBars, FaTimes} from "react-icons/fa";
import {useRef, useState} from "react";
import "../styles/main.css";
import logo from "../images/Portfolio Initials Logo - White.png";
import {useScroll, useMotionValueEvent} from "framer-motion";

function Navbar() {
    const navRef = useRef();
    const {scrollY} = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll ", latest);
        if(latest > 840 && !scrolled) {
            setScrolled(true);
        } else if(latest < 840)
        {
            setScrolled(false);
        }
    });
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <>
        <header className={scrolled ? "dark-gradient-background" : "gradient-background"}>
            <img src={logo} height="150px"></img>
            <nav ref={navRef}>
                <a onClick={() => {window.scrollTo({top: 1300, behavior: "smooth"})}}>About</a>
                <a onClick={() => {window.scrollTo({top: 2400, behavior: "smooth"})}}>Skills</a>
                <a href="/#">Projects</a>
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