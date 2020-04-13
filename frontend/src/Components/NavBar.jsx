import React from 'react';
import PDF from '../Documents/BrianyTaverasResume.pdf';

const NavBar = () => {
    return (
      <div>
            <nav className="navbar is-fixed-top" style={{backgroundColor: "transparent"}}>
              <div className="container">
                <div id="navbarMenuHeroA" className="navbar-menu is-active">
                  <div className="navbar-end">
                    <a className="navbar-item" href="#about">
                      About
                    </a>
                    <a className="navbar-item" href={PDF} target="_self" rel="noopener noreferrer">
                      Resume
                    </a>
                    <a className="navbar-item" href="#skills">
                      Skills 
                    </a>
                    <a className="navbar-item" href="#projects">
                      Projects
                    </a>
                    <a className="navbar-item" href="#contact">
                      Contact 
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            </div>
          );   
}

export default NavBar;