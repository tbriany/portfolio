import React from 'react';

const NavBar = () => {
    return (
      <div>
            <nav className="navbar is-fixed-top" style={{backgroundColor: "transparent"}}>
              <div className="container">
                <div id="navbarMenuHeroA" className="navbar-menu is-active">
                  <div className="navbar-end">
                    <a className="navbar-item" href="#about" style={{color: "#20214D", fontWeight: "bold"}}>
                      ABOUT
                    </a>
                    <a className="navbar-item" href={"https://docs.google.com/document/d/1dbJKrAa9IYTICVdQSB8mjYfToaf4VuzbRC64AcJR62o/edit?usp=sharing"} target="_blank" rel="noopener noreferrer" style={{color: "#20214D", fontWeight: "bold"}}>
                      RESUME
                    </a>
                    <a className="navbar-item" href="#skills" style={{color: "#20214D", fontWeight: "bold"}}>
                      SKILLS
                    </a>
                    <a className="navbar-item" href="#projects" style={{color: "#20214D", fontWeight: "bold"}}>
                      PROJECTS
                    </a>
                    <a className="navbar-item" href="#contact" style={{color: "#20214D", fontWeight: "bold"}}>
                      CONTACT
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            </div>
          );   
}

export default NavBar;