import {useRef, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/images/logo_white-removebg-preview.png';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg'
import navIcon3 from '../assets/images/nav-icon3.svg'
import {HashLink} from 'react-router-hash-link'
import '../styles/navbar.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleHamburgerClick = () => {
      const hamburgerElement = hamburgerRef.current;
      const navLinksElement = navLinksRef.current;
      const contactsElements = contactsRef.current;

      if (hamburgerElement && navLinksElement && contactsElements ) {
        const links = navLinksElement.querySelectorAll(".nav-links li");
        navLinksElement.classList.toggle("open");
        links.forEach(link => {
          link.classList.toggle("fade");
        });
        hamburgerElement.classList.toggle("toggle");
        contactsElements.classList.toggle("show");
      }
    };

    const hamburgerElement = hamburgerRef.current;
    if (hamburgerElement) {
      hamburgerElement.addEventListener('click', handleHamburgerClick);
    }

    return () => {
      if (hamburgerElement) {
        hamburgerElement.removeEventListener('click', handleHamburgerClick);
      }
    };
  }, []);

  return (
      <Navbar className="navbarcontainer">
      <div className="logo display: flex;align-items: center;">
         <img src={logo} alt="image"></img>
        </div>
        <Container>
        <div className="hamburger" ref={hamburgerRef}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <div className="nav-links-div">
        <ul className="nav-links" ref={navLinksRef}>
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/about">About me</Link></li>
            <li><Link to ="/skills">Skills</Link></li>
            <li><Link to="/projects">Works</Link></li>
            <li> <div className="navbar-text-div" ref={contactsRef} >
              <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sanjai-samson" target="_blank">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.facebook.com/sanjai.samson.73?mibextid=ZbWKwL" target="_blank">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.instagram.com/sanjai__samson?igsh=YmtzNGpueXdvd2Fz" target="_blank">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="/footer">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
              </span>
            </div></li>
        </ul>
        </div>
        </Container>
        </Navbar>
  )
}
