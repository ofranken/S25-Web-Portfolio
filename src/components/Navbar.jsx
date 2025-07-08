import {FaBars, FaTimes} from "react-icons/fa";
import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import "../styles/main.css";
import logo from "../images/Portfolio Initials Logo - White.png";
import {useScroll, useMotionValueEvent} from "framer-motion";

function Navbar() {
    const navRef = useRef();
    const {scrollY} = useScroll();
    const [scrolled, setScrolled] = location.pathname == "/" ? useState(false) : useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll ", latest);
        if(latest > 840 && !scrolled) {
            setScrolled(true);
        } else if(latest < 840 && location.pathname == "/")
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
                <Link to="/#about" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 1300, behavior: "smooth"});
                    }
                }}>About</Link>
                <Link to="/#skills" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 2500, behavior: "smooth"});
                    }
                }}>Skills</Link>
                <Link to="/#projects" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 3750, behavior: "smooth"});
                    }
                }}>Projects</Link>
                <Link to="/#developments" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 5400, behavior: "smooth"});
                    }
                }}>Developments</Link>
                <Link to="/#contact" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 8300, behavior: "smooth"});
                    }
                }}>Contact</Link>
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