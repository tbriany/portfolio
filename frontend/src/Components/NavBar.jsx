import React, {useState} from 'react';

const NavBar = () => {
  const [navbarClass, setnavbarClass] = useState("navbar-menu")
  const [navColor, setnavColor] = useState("navbar is-fixed-top")

  const updateNavbar = () => {
    if (navbarClass === "navbar-menu") {
    setnavbarClass("navbar-menu is-active")
    setnavColor("navbar is-fixed-top has-background-white")
    } else {
    setnavbarClass("navbar-menu")
    setnavColor("navbar is-fixed-top")
    }
  }
  
  
  return (
    <div>
      <nav className={navColor} role="navigation" aria-label="main navigation" style={{ backgroundColor: "transparent"}}>
        <div class="navbar-brand">
          <button class="navbar-burger" aria-label="menu" aria-expanded="false" onClick={updateNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

        </div>
        <div class={navbarClass}>
          <div className="navbar-end">
            <a className="navbar-item" href="#about" style={{ color: "#20214D", fontWeight: "bold"}}>
              ABOUT
                    </a>
            <a className="navbar-item" href={"https://docs.google.com/document/d/1dbJKrAa9IYTICVdQSB8mjYfToaf4VuzbRC64AcJR62o/edit?usp=sharing"} target="_blank" rel="noopener noreferrer" style={{ color: "#20214D", fontWeight: "bold" }}>
              RESUME
                    </a>
            <a className="navbar-item" href="#skills" style={{ color: "#20214D", fontWeight: "bold" }}>
              SKILLS
                    </a>
            <a className="navbar-item" href="#projects" style={{ color: "#20214D", fontWeight: "bold" }}>
              PROJECTS
                    </a>
            <a className="navbar-item" href="#contact" style={{ color: "#20214D", fontWeight: "bold" }}>
              CONTACT
              </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;